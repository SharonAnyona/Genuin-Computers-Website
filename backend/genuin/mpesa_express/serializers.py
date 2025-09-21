from rest_framework import serializers
from .models import MpesaTransaction, MpesaCredentials
from store.models import Order

class MpesaTransactionSerializer(serializers.ModelSerializer):
    order_id = serializers.IntegerField(source='order.id', read_only=True)
    order_total = serializers.DecimalField(source='order.total_price', max_digits=10, decimal_places=2, read_only=True)
    customer_name = serializers.CharField(source='order.name', read_only=True)
    
    class Meta:
        model = MpesaTransaction
        fields = [
            'id', 'order_id', 'order_total', 'customer_name',
            'phone_number', 'amount', 'account_reference', 'transaction_desc',
            'mpesa_receipt_number', 'transaction_date', 'status',
            'created_at', 'updated_at', 'error_message'
        ]
        read_only_fields = [
            'id', 'mpesa_receipt_number', 'transaction_date', 
            'created_at', 'updated_at'
        ]

class InitiatePaymentSerializer(serializers.Serializer):
    order_id = serializers.IntegerField()
    phone_number = serializers.CharField(max_length=15, required=False)
    
    def validate_order_id(self, value):
        try:
            order = Order.objects.get(id=value)
            return value
        except Order.DoesNotExist:
            raise serializers.ValidationError("Order not found")
    
    def validate_phone_number(self, value):
        if value:
            # Basic phone number validation
            import re
            # Remove any spaces, dashes, or plus signs
            cleaned = re.sub(r'[\s\-\+]', '', value)
            
            # Check if it's a valid Kenyan number
            if not re.match(r'^(254|0)[17]\d{8}$', cleaned):
                raise serializers.ValidationError(
                    "Please enter a valid Kenyan phone number (e.g., 0712345678 or 254712345678)"
                )
        return value

class PaymentStatusSerializer(serializers.Serializer):
    transaction_id = serializers.UUIDField()
    
    def validate_transaction_id(self, value):
        try:
            MpesaTransaction.objects.get(id=value)
            return value
        except MpesaTransaction.DoesNotExist:
            raise serializers.ValidationError("Transaction not found")

class MpesaCredentialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MpesaCredentials
        fields = [
            'id', 'name', 'business_short_code', 'is_sandbox', 
            'callback_url', 'created_at', 'updated_at'
        ]
        # Hide sensitive fields
        read_only_fields = ['id', 'created_at', 'updated_at']
