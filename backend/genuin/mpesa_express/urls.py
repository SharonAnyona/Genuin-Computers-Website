from django.urls import path
from . import views

app_name = 'mpesa_express'

urlpatterns = [
    # Payment initiation
    path('initiate/', views.initiate_payment, name='initiate-payment'),
    
    # Payment status check
    path('status/', views.check_payment_status, name='check-status'),
    
    # Order payment status
    path('order/<int:order_id>/status/', views.get_order_payment_status, name='order-payment-status'),
    
    # Payment page for specific order
    path('order/<int:order_id>/payment/', views.payment_page, name='payment-page'),
    
    # M-Pesa callback
    path('callback/', views.payment_callback, name='callback'),
]
