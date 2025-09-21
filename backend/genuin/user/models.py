from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models



    
class CustomUser(AbstractUser):
    USER_ROLES = (
        (1, 'Admin'),
        (2, 'Sales'),
        (3, 'Distributor'),
        (4, 'Customer'),
        (5, 'HR'),
        (6,'Procurement'),
    )
    
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(unique=True)
    user_role = models.IntegerField(choices=USER_ROLES, default=4)
    is_verified = models.BooleanField(default=False)
    
    def __str__(self):
        return self.email

