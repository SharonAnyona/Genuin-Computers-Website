import requests
import base64
from datetime import datetime
from django.conf import settings
from django.utils import timezone
from .models import MpesaTransaction, MpesaCredentials
import logging

logger = logging.getLogger(__name__)

class DarajaService:
    def __init__(self, credentials_name='default'):
        try:
            self.credentials = MpesaCredentials.objects.get(name=credentials_name)
        except MpesaCredentials.DoesNotExist:
            raise ValueError(f"M-Pesa credentials '{credentials_name}' not found")
        
        self.base_url = "https://sandbox.safaricom.co.ke" if self.credentials.is_sandbox else "https://api.safaricom.co.ke"
        self.access_token = None
    
    def get_access_token(self):
        """Get OAuth access token from Daraja API"""
        url = f"{self.base_url}/oauth/v1/generate?grant_type=client_credentials"
        
        # Create basic auth header
        credentials = f"{self.credentials.consumer_key}:{self.credentials.consumer_secret}"
        encoded_credentials = base64.b64encode(credentials.encode()).decode()
        
        headers = {
            'Authorization': f'Basic {encoded_credentials}',
            'Content-Type': 'application/json'
        }
        
        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            
            data = response.json()
            self.access_token = data.get('access_token')
            
            logger.info("Successfully obtained M-Pesa access token")
            return self.access_token
            
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to get M-Pesa access token: {str(e)}")
            raise Exception(f"Failed to get access token: {str(e)}")
    
    def generate_password(self):
        """Generate password for STK push"""
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        password_string = f"{self.credentials.business_short_code}{self.credentials.passkey}{timestamp}"
        password = base64.b64encode(password_string.encode()).decode()
        return password, timestamp
    
    def initiate_stk_push(self, phone_number, amount, order_id, transaction_desc="Payment for order"):
        """Initiate STK Push payment"""
        
        # Ensure we have access token
        if not self.access_token:
            self.get_access_token()
        
        # Generate password and timestamp
        password, timestamp = self.generate_password()
        
        # Format phone number (ensure it starts with 254)
        if phone_number.startswith('0'):
            phone_number = '254' + phone_number[1:]
        elif phone_number.startswith('+254'):
            phone_number = phone_number[1:]
        elif not phone_number.startswith('254'):
            phone_number = '254' + phone_number
        
        url = f"{self.base_url}/mpesa/stkpush/v1/processrequest"
        
        headers = {
            'Authorization': f'Bearer {self.access_token}',
            'Content-Type': 'application/json'
        }
        
        payload = {
            "BusinessShortCode": self.credentials.business_short_code,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": int(amount),  # M-Pesa expects integer
            "PartyA": phone_number,
            "PartyB": self.credentials.business_short_code,
            "PhoneNumber": phone_number,
            "CallBackURL": self.credentials.callback_url,
            "AccountReference": f"ORDER{order_id}",
            "TransactionDesc": transaction_desc
        }
        
        try:
            logger.info(f"Initiating STK push for phone {phone_number}, amount {amount}")
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            
            data = response.json()
            logger.info(f"STK push response: {data}")
            
            return {
                'success': True,
                'data': data,
                'merchant_request_id': data.get('MerchantRequestID'),
                'checkout_request_id': data.get('CheckoutRequestID'),
                'response_code': data.get('ResponseCode'),
                'response_description': data.get('ResponseDescription'),
                'customer_message': data.get('CustomerMessage')
            }
            
        except requests.exceptions.RequestException as e:
            logger.error(f"STK push failed: {str(e)}")
            return {
                'success': False,
                'error': str(e),
                'data': None
            }
    
    def query_stk_status(self, checkout_request_id):
        """Query the status of an STK push transaction"""
        
        if not self.access_token:
            self.get_access_token()
        
        password, timestamp = self.generate_password()
        
        url = f"{self.base_url}/mpesa/stkpushquery/v1/query"
        
        headers = {
            'Authorization': f'Bearer {self.access_token}',
            'Content-Type': 'application/json'
        }
        
        payload = {
            "BusinessShortCode": self.credentials.business_short_code,
            "Password": password,
            "Timestamp": timestamp,
            "CheckoutRequestID": checkout_request_id
        }
        
        try:
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            
            data = response.json()
            logger.info(f"STK query response: {data}")
            
            return {
                'success': True,
                'data': data
            }
            
        except requests.exceptions.RequestException as e:
            logger.error(f"STK query failed: {str(e)}")
            return {
                'success': False,
                'error': str(e)
            }

class PaymentService:
    """High-level service for handling payments"""
    
    def __init__(self):
        self.daraja = DarajaService()
    
    def initiate_payment(self, order, phone_number=None):
        """Initiate payment for an order"""
        
        # Use order phone number if not provided
        if not phone_number:
            phone_number = order.phone_number
        
        # Check if transaction already exists
        if hasattr(order, 'mpesa_transaction'):
            existing_transaction = order.mpesa_transaction
            if existing_transaction.is_pending:
                return {
                    'success': False,
                    'error': 'Payment already initiated for this order',
                    'transaction_id': str(existing_transaction.id)
                }
        
        try:
            # Initiate STK push
            result = self.daraja.initiate_stk_push(
                phone_number=phone_number,
                amount=order.total_price,
                order_id=order.id,
                transaction_desc=f"Payment for Order #{order.id}"
            )
            
            if result['success']:
                # Create transaction record
                transaction = MpesaTransaction.objects.create(
                    order=order,
                    phone_number=phone_number,
                    amount=order.total_price,
                    account_reference=f"ORDER{order.id}",
                    transaction_desc=f"Payment for Order #{order.id}",
                    merchant_request_id=result['merchant_request_id'],
                    checkout_request_id=result['checkout_request_id'],
                    status='pending'
                )
                
                logger.info(f"Created M-Pesa transaction {transaction.id} for order {order.id}")
                
                return {
                    'success': True,
                    'transaction_id': str(transaction.id),
                    'customer_message': result['customer_message'],
                    'checkout_request_id': result['checkout_request_id']
                }
            else:
                return {
                    'success': False,
                    'error': result['error']
                }
                
        except Exception as e:
            logger.error(f"Payment initiation failed: {str(e)}")
            return {
                'success': False,
                'error': str(e)
            }
    
    def process_callback(self, callback_data):
        """Process M-Pesa callback"""
        try:
            # Extract callback information
            stk_callback = callback_data.get('Body', {}).get('stkCallback', {})
            checkout_request_id = stk_callback.get('CheckoutRequestID')
            result_code = stk_callback.get('ResultCode')
            result_desc = stk_callback.get('ResultDesc')
            
            if not checkout_request_id:
                logger.error("No CheckoutRequestID in callback")
                return False
            
            # Find the transaction
            try:
                transaction = MpesaTransaction.objects.get(checkout_request_id=checkout_request_id)
            except MpesaTransaction.DoesNotExist:
                logger.error(f"Transaction with CheckoutRequestID {checkout_request_id} not found")
                return False
            
            # Log the callback
            from .models import MpesaCallbackLog
            MpesaCallbackLog.objects.create(
                transaction=transaction,
                callback_data=callback_data
            )
            
            # Update transaction based on result
            if result_code == 0:  # Success
                # Extract callback metadata
                callback_metadata = stk_callback.get('CallbackMetadata', {}).get('Item', [])
                metadata_dict = {}
                
                for item in callback_metadata:
                    name = item.get('Name')
                    value = item.get('Value')
                    if name and value is not None:
                        metadata_dict[name] = value
                
                # Update transaction
                transaction.status = 'completed'
                transaction.mpesa_receipt_number = metadata_dict.get('MpesaReceiptNumber')
                transaction.transaction_date = timezone.now()
                transaction.callback_data = callback_data
                transaction.save()
                
                # Update order status
                order = transaction.order
                order.status = 'paid'
                order.save()
                
                logger.info(f"Payment completed for transaction {transaction.id}")
                
            else:  # Failed
                transaction.status = 'failed'
                transaction.error_message = result_desc
                transaction.callback_data = callback_data
                transaction.save()
                
                logger.error(f"Payment failed for transaction {transaction.id}: {result_desc}")
            
            return True
            
        except Exception as e:
            logger.error(f"Callback processing failed: {str(e)}")
            return False
