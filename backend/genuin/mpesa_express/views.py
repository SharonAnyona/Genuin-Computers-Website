import requests, base64, json, re, os
from datetime import datetime
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponseBadRequest
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from dotenv import load_dotenv

from .models import Transaction
from store.models import Order

# Load environment variables
load_dotenv()

# Retrieve variables from the environment
CONSUMER_KEY = os.getenv("CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("CONSUMER_SECRET")
MPESA_PASSKEY = os.getenv("MPESA_PASSKEY")
MPESA_SHORTCODE = os.getenv("MPESA_SHORTCODE")
CALLBACK_URL = os.getenv("CALLBACK_URL")
MPESA_BASE_URL = os.getenv("MPESA_BASE_URL", "https://sandbox.safaricom.co.ke")

# Phone number formatting and validation
def format_phone_number(phone):
    phone = phone.replace("+", "").replace(" ", "").replace("-", "")
    if re.match(r"^254\d{9}$", phone):
        return phone
    elif phone.startswith("0") and len(phone) == 10:
        return "254" + phone[1:]
    else:
        raise ValueError("Invalid phone number format. Use format: 0712345678 or 254712345678")

# Generate M-Pesa access token
def generate_access_token():
    try:
        credentials = f"{CONSUMER_KEY}:{CONSUMER_SECRET}"
        encoded_credentials = base64.b64encode(credentials.encode()).decode()
        headers = {
            "Authorization": f"Basic {encoded_credentials}",
            "Content-Type": "application/json",
        }
        response = requests.get(
            f"{MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials",
            headers=headers,
        ).json()
        
        if "access_token" in response:
            return response["access_token"]
        else:
            raise Exception("Access token missing in response.")
    except requests.RequestException as e:
        raise Exception(f"Failed to connect to M-Pesa: {str(e)}")

# Initiate STK Push and handle response
def initiate_stk_push(phone, amount, order_id):
    try:
        token = generate_access_token()
        headers = {
            "Authorization": f"Bearer {token}", 
            "Content-Type": "application/json"
        }
        
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        stk_password = base64.b64encode(
            (MPESA_SHORTCODE + MPESA_PASSKEY + timestamp).encode()
        ).decode()
        
        request_body = {
            "BusinessShortCode": MPESA_SHORTCODE,
            "Password": stk_password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": int(amount),
            "PartyA": phone,
            "PartyB": MPESA_SHORTCODE,
            "PhoneNumber": phone,
            "CallBackURL": CALLBACK_URL,
            "AccountReference": f"ORDER{order_id}",
            "TransactionDesc": f"Payment for Order #{order_id}",
        }
        
        response = requests.post(
            f"{MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest",
            json=request_body,
            headers=headers,
        ).json()
        
        return response
    except Exception as e:
        print(f"Failed to initiate STK Push: {str(e)}")
        return {"error": str(e)}

# Query STK Push status
def query_stk_push(checkout_request_id):
    try:
        token = generate_access_token()
        headers = {
            "Authorization": f"Bearer {token}", 
            "Content-Type": "application/json"
        }
        
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        password = base64.b64encode(
            (MPESA_SHORTCODE + MPESA_PASSKEY + timestamp).encode()
        ).decode()
        
        request_body = {
            "BusinessShortCode": MPESA_SHORTCODE,
            "Password": password,
            "Timestamp": timestamp,
            "CheckoutRequestID": checkout_request_id
        }
        
        response = requests.post(
            f"{MPESA_BASE_URL}/mpesa/stkpushquery/v1/query",
            json=request_body,
            headers=headers,
        )
        
        return response.json()
    except requests.RequestException as e:
        print(f"Error querying STK status: {str(e)}")
        return {"error": str(e)}

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
@swagger_auto_schema(
    operation_description="Initiate M-Pesa STK Push for an order",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['order_id', 'phone_number'],
        properties={
            'order_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='Order ID'),
            'phone_number': openapi.Schema(type=openapi.TYPE_STRING, description='Phone number (0712345678 or 254712345678)'),
        }
    ),
    responses={
        200: openapi.Response(
            description="STK Push initiated successfully",
            schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'success': openapi.Schema(type=openapi.TYPE_BOOLEAN),
                    'message': openapi.Schema(type=openapi.TYPE_STRING),
                    'checkout_request_id': openapi.Schema(type=openapi.TYPE_STRING),
                    'customer_message': openapi.Schema(type=openapi.TYPE_STRING),
                }
            )
        ),
        400: "Bad request",
        404: "Order not found"
    }
)
def initiate_payment(request):
    """Initiate M-Pesa STK Push for an order"""
    try:
        data = request.data
        order_id = data.get('order_id')
        phone_number = data.get('phone_number')
        
        if not order_id or not phone_number:
            return Response({
                'success': False,
                'error': 'order_id and phone_number are required'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Get the order
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response({
                'success': False,
                'error': 'Order not found'
            }, status=status.HTTP_404_NOT_FOUND)
        
        # Check if order already has a successful payment
        if hasattr(order, 'mpesa_transaction'):
            existing_transaction = order.mpesa_transaction
            if existing_transaction.status == 'success':
                return Response({
                    'success': False,
                    'error': 'Order has already been paid'
                }, status=status.HTTP_400_BAD_REQUEST)
            elif existing_transaction.status == 'pending':
                return Response({
                    'success': False,
                    'error': 'Payment is already pending for this order',
                    'checkout_request_id': existing_transaction.checkout_id
                }, status=status.HTTP_400_BAD_REQUEST)
        
        # Format phone number
        try:
            formatted_phone = format_phone_number(phone_number)
        except ValueError as e:
            return Response({
                'success': False,
                'error': str(e)
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Initiate STK Push
        response = initiate_stk_push(formatted_phone, order.total_price, order.id)
        
        if response.get("ResponseCode") == "0":
            # Create or update transaction record
            transaction, created = Transaction.objects.get_or_create(
                order=order,
                defaults={
                    'amount': order.total_price,
                    'checkout_id': response["CheckoutRequestID"],
                    'phone_number': formatted_phone,
                    'status': 'pending',
                    'merchant_request_id': response.get("MerchantRequestID")
                }
            )
            
            if not created:
                # Update existing transaction
                transaction.checkout_id = response["CheckoutRequestID"]
                transaction.phone_number = formatted_phone
                transaction.status = 'pending'
                transaction.merchant_request_id = response.get("MerchantRequestID")
                transaction.error_message = None
                transaction.save()
            
            return Response({
                'success': True,
                'message': 'STK Push sent successfully. Please check your phone.',
                'checkout_request_id': response["CheckoutRequestID"],
                'customer_message': response.get("CustomerMessage", "Please check your phone for M-Pesa prompt"),
                'order_id': order.id
            }, status=status.HTTP_200_OK)
        else:
            error_message = response.get("errorMessage", "Failed to send STK push. Please try again.")
            
            # Save failed transaction
            Transaction.objects.update_or_create(
                order=order,
                defaults={
                    'amount': order.total_price,
                    'phone_number': formatted_phone,
                    'status': 'failed',
                    'error_message': error_message
                }
            )
            
            return Response({
                'success': False,
                'error': error_message
            }, status=status.HTTP_400_BAD_REQUEST)
            
    except Exception as e:
        print(f"Payment initiation error: {str(e)}")
        return Response({
            'success': False,
            'error': 'An unexpected error occurred. Please try again.'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([AllowAny])
@swagger_auto_schema(
    operation_description="Check STK Push status",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['checkout_request_id'],
        properties={
            'checkout_request_id': openapi.Schema(type=openapi.TYPE_STRING, description='Checkout Request ID'),
        }
    ),
    responses={
        200: openapi.Response(
            description="Status retrieved successfully",
            schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'success': openapi.Schema(type=openapi.TYPE_BOOLEAN),
                    'status': openapi.Schema(type=openapi.TYPE_OBJECT),
                }
            )
        )
    }
)
def check_payment_status(request):
    """Check the status of STK Push"""
    try:
        data = request.data
        checkout_request_id = data.get('checkout_request_id')
        
        if not checkout_request_id:
            return Response({
                'success': False,
                'error': 'checkout_request_id is required'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Query the STK push status
        status_response = query_stk_push(checkout_request_id)
        
        # Also get local transaction status
        try:
            transaction = Transaction.objects.get(checkout_id=checkout_request_id)
            local_status = {
                'local_status': transaction.status,
                'mpesa_code': transaction.mpesa_code,
                'amount': str(transaction.amount),
                'order_id': transaction.order.id
            }
        except Transaction.DoesNotExist:
            local_status = {'local_status': 'not_found'}
        
        return Response({
            'success': True,
            'mpesa_status': status_response,
            'transaction': local_status
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        print(f"Status check error: {str(e)}")
        return Response({
            'success': False,
            'error': 'Failed to check payment status'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def payment_callback(request):
    """Handle M-Pesa callback"""
    if request.method != "POST":
        return HttpResponseBadRequest("Only POST requests are allowed")
    
    try:
        callback_data = json.loads(request.body)
        print(f"Received callback: {callback_data}")
        
        result_code = callback_data["Body"]["stkCallback"]["ResultCode"]
        checkout_id = callback_data["Body"]["stkCallback"]["CheckoutRequestID"]
        result_desc = callback_data["Body"]["stkCallback"].get("ResultDesc", "")
        
        # Find the transaction
        try:
            transaction = Transaction.objects.get(checkout_id=checkout_id)
        except Transaction.DoesNotExist:
            print(f"Transaction with checkout_id {checkout_id} not found")
            return JsonResponse({"ResultCode": 1, "ResultDesc": "Transaction not found"})
        
        if result_code == 0:
            # Successful transaction
            metadata = callback_data["Body"]["stkCallback"]["CallbackMetadata"]["Item"]
            
            amount = next(item["Value"] for item in metadata if item["Name"] == "Amount")
            mpesa_code = next(item["Value"] for item in metadata if item["Name"] == "MpesaReceiptNumber")
            phone = next(item["Value"] for item in metadata if item["Name"] == "PhoneNumber")
            
            # Update transaction
            transaction.status = "success"
            transaction.mpesa_code = mpesa_code
            transaction.phone_number = str(phone)
            transaction.save()
            
            # Update order status to paid
            order = transaction.order
            order.status = 'paid'
            order.save()
            
            print(f"Payment successful for Order #{order.id}: {mpesa_code}")
            
            return JsonResponse({"ResultCode": 0, "ResultDesc": "Payment successful"})
        else:
            # Payment failed - Update both transaction and order
            transaction.status = "failed"
            transaction.error_message = result_desc
            transaction.save()
            
            # Update order status based on failure type
            order = transaction.order
            if result_code == 1032:  # User cancelled
                order.status = 'cancelled'
                print(f"Payment cancelled by user for Order #{order.id}: {result_desc}")
            elif result_code == 1:  # Insufficient balance
                order.status = 'payment_failed'
                print(f"Payment failed (insufficient balance) for Order #{order.id}: {result_desc}")
            else:  # Other failures
                order.status = 'payment_failed'
                print(f"Payment failed for Order #{order.id}: {result_desc}")
            
            order.save()
            
            return JsonResponse({"ResultCode": result_code, "ResultDesc": result_desc})
            
    except (json.JSONDecodeError, KeyError) as e:
        print(f"Invalid callback data: {str(e)}")
        return HttpResponseBadRequest(f"Invalid request data: {str(e)}")
    except Exception as e:
        print(f"Callback processing error: {str(e)}")
        return JsonResponse({"ResultCode": 1, "ResultDesc": "Internal server error"})

@api_view(['GET'])
@permission_classes([AllowAny])
def get_order_payment_status(request, order_id):
    """Get payment status for a specific order"""
    try:
        order = get_object_or_404(Order, id=order_id)
        
        if hasattr(order, 'mpesa_transaction'):
            transaction = order.mpesa_transaction
            return Response({
                'success': True,
                'order_id': order.id,
                'payment_status': transaction.status,
                'mpesa_code': transaction.mpesa_code,
                'amount': str(transaction.amount),
                'phone_number': transaction.phone_number,
                'checkout_id': transaction.checkout_id,
                'timestamp': transaction.timestamp.isoformat() if transaction.timestamp else None
            })
        else:
            return Response({
                'success': True,
                'order_id': order.id,
                'payment_status': 'no_payment',
                'message': 'No payment initiated for this order'
            })
            
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

def payment_page(request, order_id):
    """Display payment page for a specific order"""
    order = get_object_or_404(Order, id=order_id)
    
    # Optional: Check if user has permission to view this order
    # if request.user.is_authenticated and order.user != request.user:
    #     return redirect('account_login')
    
    context = {
        'order': order,
        'page_title': f'Payment - Order #{order.id}'
    }
    
    return render(request, 'mpesa/payment_page.html', context)
