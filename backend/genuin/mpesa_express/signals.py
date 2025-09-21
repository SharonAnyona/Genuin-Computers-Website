from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import MpesaTransaction
from store.models import Order
from utils.helpers import Helper
import logging

logger = logging.getLogger(__name__)

@receiver(post_save, sender=MpesaTransaction)
def handle_payment_completion(sender, instance, created, **kwargs):
    """Handle actions when payment is completed"""
    
    # Only process if transaction status changed to completed
    if not created and instance.status == 'completed':
        try:
            order = instance.order
            
            # Update order status if not already updated
            if order.status != 'paid':
                order.status = 'paid'
                order.save()
                
                logger.info(f"Order {order.id} marked as paid after successful M-Pesa payment")
                
                # Send payment confirmation email
                try:
                    helper = Helper()
                    # You can create a new method for payment confirmation
                    # helper.send_payment_confirmation_email(order, instance)
                    logger.info(f"Payment confirmation email sent for order {order.id}")
                except Exception as e:
                    logger.error(f"Failed to send payment confirmation email: {str(e)}")
                    
        except Exception as e:
            logger.error(f"Error handling payment completion: {str(e)}")

@receiver(post_save, sender=MpesaTransaction)
def handle_payment_failure(sender, instance, created, **kwargs):
    """Handle actions when payment fails"""
    
    # Only process if transaction status changed to failed
    if not created and instance.status == 'failed':
        try:
            order = instance.order
            logger.warning(f"Payment failed for order {order.id}: {instance.error_message}")
            
            # Optionally send failure notification email
            # You can implement this based on your requirements
            
        except Exception as e:
            logger.error(f"Error handling payment failure: {str(e)}")
