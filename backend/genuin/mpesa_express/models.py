from django.db import models
from store.models import Order

class Transaction(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('success', 'Success'),
        ('failed', 'Failed'),
        ('cancelled', 'Cancelled'),
    ]
    
    # Link to order
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='mpesa_transaction')
    
    # M-Pesa transaction details
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    checkout_id = models.CharField(max_length=100, unique=True)
    mpesa_code = models.CharField(max_length=100, unique=True, null=True, blank=True)
    phone_number = models.CharField(max_length=15)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    timestamp = models.DateTimeField(auto_now_add=True)
    
    # Additional fields for better tracking
    merchant_request_id = models.CharField(max_length=100, null=True, blank=True)
    error_message = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.mpesa_code or 'Pending'} - {self.amount} KES - Order #{self.order.id}"
    
    class Meta:
        ordering = ['-timestamp']
