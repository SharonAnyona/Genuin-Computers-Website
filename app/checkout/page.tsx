"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { BACKEND_URL } from "@/config";
import { useProductStore } from "../_zustand/store";

interface CheckoutForm {
  name: string;
  phone_number: string;
  email: string;
  address: string;
  city: string;
  order_notes: string;
}

const CITIES = [
  'Nairobi',
  'Coast',
  'Central',
  'Eastern',
  'North Eastern',
  'Nyanza',
  'Rift Valley',
  'Western'
];

export default function Checkout() {
  const { products, clearCart, total, calculateTotals } = useProductStore();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'cod'>('mpesa');
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'pending' | 'completed' | 'failed'>('idle');

  const [checkoutForm, setCheckoutForm] = useState<CheckoutForm>({
    name: "",
    phone_number: "",
    email: "",
    address: "",
    city: "Nairobi", // Default to Nairobi
    order_notes: "",
  });

  // Handle input and textarea changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  };

  // Handle select changes
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  };

  const createOrder = async (paymentMethod: 'mpesa' | 'cod') => {
    if (
      checkoutForm.name.length > 0 &&
      checkoutForm.phone_number.length > 0 &&
      checkoutForm.email.length > 0 &&
      checkoutForm.address.length > 0 &&
      checkoutForm.city.length > 0
    ) {
      setIsProcessing(true);
      try {
        const items = products.map((product) => ({
          product: product.id,
          product_name: product.name,
          quantity: product.amount,
          price: product.price,
        }));

        // First create the order
        const orderResponse = await fetch(`${BACKEND_URL}/store/api/orders/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...checkoutForm,
            payment_method: paymentMethod,
            items,
          }),
        });

        if (!orderResponse.ok) {
          const errorData = await orderResponse.json();
          throw new Error(errorData.error || "Failed to place order");
        }

        const orderData = await orderResponse.json();
        setOrderId(orderData.order.id);

        if (paymentMethod === 'mpesa') {
          // Initiate M-Pesa payment - use mpesaPhone if provided, otherwise fall back to the form's phone_number
          const phone = mpesaPhone || checkoutForm.phone_number;
          const paymentResponse = await fetch(`${BACKEND_URL}/mpesa/initiate/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              order_id: orderData.order.id,
              phone_number: phone,
            }),
          });

          const paymentData = await paymentResponse.json();
          
          if (!paymentResponse.ok) {
            throw new Error(paymentData.error || "Failed to initiate M-Pesa payment");
          }

          setPaymentStatus('pending');
          // Start polling for payment status
          pollPaymentStatus(orderData.order.id);
        } else {
          // For cash on delivery
          setPaymentStatus('completed');
          completeOrder();
        }
      } catch (error: any) {
        console.error("Order error:", error);
        toast.error(error.message || "Error processing your order. Please try again.");
        setPaymentStatus('failed');
      } finally {
        setIsProcessing(false);
      }
    } else {
      toast.error("Please fill all required fields");
    }
  };

  const pollPaymentStatus = async (orderId: number) => {
    let attempts = 0;
    const maxAttempts = 30; // 5 minutes max (10s * 30 = 300s)
    
    const checkStatus = async () => {
      try {
        // Use the correct endpoint for order payment status
        const response = await fetch(`${BACKEND_URL}/mpesa/order/${orderId}/status/`);
        const data = await response.json();

        // Only treat 'success' as paid, all other statuses are failure
        if (data.payment_status === 'success') {
          setPaymentStatus('completed');
          completeOrder();
          return true;
        } else if (
          data.payment_status === 'failed' ||
          data.payment_status === 'cancelled' ||
          data.payment_status === 'no_payment' ||
          data.payment_status === 'pending'
        ) {
          setPaymentStatus('failed');
          toast.error('Payment not completed. Please try again.');
          return false;
        }

        // If status is unknown, treat as failure
        setPaymentStatus('failed');
        toast.error('Unknown payment status. Please contact support.');
        return false;
      } catch (error) {
        console.error('Error checking payment status:', error);
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(checkStatus, 10000);
        } else {
          setPaymentStatus('failed');
          toast.error('Error verifying payment. Please contact support.');
        }
      }
    };

  setTimeout(checkStatus, 15000); // Start polling after 15 seconds
  };

  const completeOrder = () => {
    clearCart();
    toast.success("Order placed successfully!");
    setTimeout(() => {
      router.push(`/orders/${orderId}`);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation (phone_number handled separately for M-Pesa)
    if (!checkoutForm.name || !checkoutForm.email || !checkoutForm.address) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Validate phone number format
    const phoneRegex = /^(?:254|0)?[17]\d{8}$/;
    
    // For M-Pesa payments, validate the appropriate phone number
    if (paymentMethod === 'mpesa') {
      const phoneToValidate = mpesaPhone || checkoutForm.phone_number;
      if (!phoneToValidate) {
        toast.error('Please enter a phone number for M-Pesa payment');
        return;
      }
      if (!phoneRegex.test(phoneToValidate)) {
        toast.error('Please enter a valid M-Pesa phone number (e.g., 0712345678)');
        return;
      }
    } else {
      // For non-M-Pesa payments, validate the main phone number
      if (!checkoutForm.phone_number) {
        toast.error('Please fill in all required fields');
        return;
      }
      if (!phoneRegex.test(checkoutForm.phone_number)) {
        toast.error('Please enter a valid Kenyan phone number (e.g., 0712345678)');
        return;
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(checkoutForm.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    // If all validations pass, create the order
    try {
      await createOrder(paymentMethod);
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Failed to process your order. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={checkoutForm.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
                disabled={isProcessing}
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number (e.g., 0712345678)"
                value={checkoutForm.phone_number}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
                disabled={isProcessing}
                pattern="[0-9]{10,12}"
                title="Please enter a valid Kenyan phone number (e.g., 0712345678)"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={checkoutForm.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
                disabled={isProcessing}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={checkoutForm.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
                disabled={isProcessing}
              />
              <select
                name="city"
                value={checkoutForm.city}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded bg-white"
                required
                disabled={isProcessing}
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <textarea
                name="order_notes"
                placeholder="Order Notes (Optional)"
                value={checkoutForm.order_notes}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={3}
                disabled={isProcessing}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            <div className="bg-gray-50 p-4 rounded mb-6">
              {products.map((product) => (
                <div key={product.id} className="flex justify-between py-2 border-b">
                  <div>
                    {product.name} × {product.amount}
                  </div>
                  <div>KSh {(product.price * product.amount).toLocaleString()}</div>
                </div>
              ))}
              <div className="flex justify-between font-semibold mt-4 pt-2 border-t">
                <div>Total</div>
                <div>KSh {total.toLocaleString()}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    className="h-4 w-4 text-blue-600"
                    checked={paymentMethod === 'mpesa'}
                    onChange={() => setPaymentMethod('mpesa')}
                    disabled={isProcessing}
                  />
                  <span className="ml-2">M-Pesa Mobile Money</span>
                </label>
                
                {paymentMethod === 'mpesa' && (
                  <div className="ml-6 mt-2">
                    <input
                      type="tel"
                      placeholder="M-Pesa Phone Number (e.g., 0712345678)"
                      value={mpesaPhone}
                      onChange={(e) => setMpesaPhone(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                      disabled={isProcessing}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      You'll receive an M-Pesa payment request on this number
                    </p>
                  </div>
                )}

                <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    className="h-4 w-4 text-blue-600"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    disabled={isProcessing}
                  />
                  <span className="ml-2">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {paymentStatus === 'pending' ? (
              <div className="p-4 bg-yellow-50 text-yellow-800 rounded-md mb-4">
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-600 mr-2"></div>
                  <span>Waiting for M-Pesa payment confirmation...</span>
                </div>
                <p className="text-sm mt-2">Please check your phone to complete the payment</p>
              </div>
            ) : paymentStatus === 'completed' ? (
              <div className="p-4 bg-green-50 text-green-800 rounded-md mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Payment received! Redirecting to order details...</span>
                </div>
              </div>
            ) : paymentStatus === 'failed' ? (
              <div className="p-4 bg-red-50 text-red-800 rounded-md mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Payment failed. Please try again.</span>
                </div>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-3 px-4 rounded-md mt-4 ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
