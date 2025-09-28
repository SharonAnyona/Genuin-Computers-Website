"use client";

import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { BACKEND_URL } from "@/config";
import Link from "next/link";

interface OrderItem {
  id: string;
  product_name: string;
  quantity: number;
  price: string;
  product: {
    id: string;
    slug: string;
  };
}

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_price: string;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
  payment_status: string;
  payment_method: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  order_notice: string;
  shipping_status: string;
  tracking_number: string;
}

export default function OrderDetailPage() {
  // const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaying, setIsPaying] = useState(false);
  const [mpesaPhone, setMpesaPhone] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push(`/login?callbackUrl=/orders/${params.id}`);
      return;
    }
    fetchOrder();
  }, [router, params.id]);

  const fetchOrder = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`${BACKEND_URL}/store/api/orders/${params.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }

      const data = await response.json();
      setOrder(data);
    } catch (error) {
      console.error("Error fetching order:", error);
      setError("Failed to load order details. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayWithMpesa = async () => {
    if (!mpesaPhone) {
      alert("Please enter your M-Pesa phone number");
      return;
    }

    setIsPaying(true);
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`${BACKEND_URL}/mpesa/initiate/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          order_id: order?.id,
          phone_number: mpesaPhone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to initiate M-Pesa payment");
      }

      // Start polling for payment status
      pollPaymentStatus();
    } catch (error: any) {
      console.error("Payment error:", error);
      alert(error.message || "Failed to process payment. Please try again.");
      setIsPaying(false);
    }
  };

  const pollPaymentStatus = async () => {
    let attempts = 0;
    const maxAttempts = 30; // 5 minutes max (10s * 30 = 300s)
    
    const checkStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(`${BACKEND_URL}/mpesa/status/${order?.id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
          // Refresh order details
          fetchOrder();
          setIsPaying(false);
          return true;
        } else if (data.status === 'failed') {
          setIsPaying(false);
          alert('Payment failed. Please try again.');
          return false;
        }
        
        // If still pending, continue polling
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(checkStatus, 10000); // Check every 10 seconds
        } else {
          setIsPaying(false);
          alert('Payment timeout. Please check your M-Pesa and refresh the page.');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(checkStatus, 10000);
        } else {
          setIsPaying(false);
          alert('Error verifying payment. Please contact support.');
        }
      }
    };
    
    setTimeout(checkStatus, 10000); // Start polling after 10 seconds
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    const statusClasses: { [key: string]: string } = {
      pending: "bg-yellow-100 text-yellow-800",
      processing: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
      paid: "bg-green-100 text-green-800",
      failed: "bg-red-100 text-red-800",
      shipped: "bg-purple-100 text-purple-800",
      delivered: "bg-green-100 text-green-800",
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          statusClasses[status.toLowerCase()] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900">Order not found</h3>
            <p className="mt-1 text-sm text-gray-500">
              The order you're looking for doesn't exist or you don't have permission to view it.
            </p>
            <div className="mt-6">
              <Link
                href="/orders"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back to Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/orders"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Orders
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Order #{order.order_number}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Placed on {formatDate(order.created_at)}
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              {getStatusBadge(order.status)}
              {order.payment_status && order.payment_status !== 'completed' && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {order.payment_status === 'pending' ? 'Payment Pending' : 'Payment ' + order.payment_status}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Order Summary
          </h3>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {order.items.map((item) => (
                <li key={item.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 bg-gray-200 rounded-md overflow-hidden">
                        {/* Product image would go here */}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        <Link href={`/product/${item.product.slug}`}>
                          {item.product_name}
                        </Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        KSh {parseFloat(item.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>KSh {parseFloat(order.total_price).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 sm:px-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Shipping Information
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-900">{order.name}</p>
              <p className="text-sm text-gray-500">{order.address}</p>
              <p className="text-sm text-gray-500">
                {order.city}
              </p>
              <p className="text-sm text-gray-500">{order.phone}</p>
              <p className="text-sm text-gray-500">{order.email}</p>
              
              {order.shipping_status === 'shipped' && order.tracking_number && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900">Tracking Information</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Tracking #: {order.tracking_number}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Payment Method
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-900">
                {order.payment_method === 'mpesa' ? 'M-Pesa Mobile Money' : 'Cash on Delivery'}
              </p>
              <p className="text-sm text-gray-500">
                {order.payment_status === 'completed' 
                  ? 'Payment completed successfully.'
                  : order.payment_status === 'pending'
                  ? 'Payment is pending.'
                  : 'Payment not completed.'}
              </p>

              {order.payment_status !== 'completed' && order.payment_method === 'mpesa' && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Complete Payment</h4>
                  <div className="flex">
                    <input
                      type="tel"
                      placeholder="M-Pesa Phone Number"
                      value={mpesaPhone}
                      onChange={(e) => setMpesaPhone(e.target.value)}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      disabled={isPaying}
                    />
                    <button
                      type="button"
                      onClick={handlePayWithMpesa}
                      disabled={isPaying || !mpesaPhone}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white ${
                        isPaying || !mpesaPhone
                          ? 'bg-blue-300 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isPaying ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Pay Now'}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    You'll receive an M-Pesa payment request on this number
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {order.order_notice && (
          <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Order Notes</h3>
            <p className="text-sm text-gray-500">{order.order_notice}</p>
          </div>
        )}
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Need Help?
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            If you have any questions about your order, please don't hesitate to contact our customer service team.
          </p>
          <div className="flex space-x-4">
            <a
              href="tel:+254712345678"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <svg
                className="h-5 w-5 text-gray-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us
            </a>
            <a
              href="mailto:support@example.com"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <svg
                className="h-5 w-5 text-gray-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
