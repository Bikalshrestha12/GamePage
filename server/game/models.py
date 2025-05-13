from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class Game(models.Model):
    title = models.CharField(max_length=100, default='quiz game', null=False, blank=False)
    description = models.TextField( null=True, blank=True)
    release_date = models.DateField( null=True, blank=True, auto_now_add=True)
    genre = models.CharField(max_length=50, null=True, blank=True) 
    platform = models.CharField(max_length=50, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    image = models.ImageField(upload_to='uploads/images/', null=False, blank=False, default='image')
    level = models.IntegerField(null=True, blank=True)  # e.g., "Beginner", "Intermediate", "Advanced"
    types = models.BooleanField(default=False, null=False, blank=False)  # True for paid, False for free
    online = models.BooleanField(default=False, null=False, blank=False)  # True for online, False for offline
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0, null=True, blank=True)

    def __str__(self):
        return self.title

# 
class UserManager(BaseUserManager):
    def create_user(self, email, fullname, tc,  password=None, password2 = None):
        """
        Creates and saves a User with the given email, fullname,
        tc and password.
        """
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            fullname = fullname,
            tc = tc,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, fullname, tc, password=None):
        """
        Creates and saves a superuser with the given email, fullname, tc and password.
        """
        user = self.create_user(
            email,
            password=password,
            fullname=fullname,
            tc=tc,
        )
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


# custom user
class CustomUser(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    fullname = models.CharField(max_length=200, null=True)
    tc = models.BooleanField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    create_at = models.DateTimeField(auto_now_add=True, null=True)
    updateed_at = models.DateTimeField(auto_now=True, null=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["fullname", "tc"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
 
class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    bio = models.CharField(max_length=300)
    image = models.ImageField(default="default.jpg", upload_to="uploads/user_image")
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.full_name

@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(
            user=instance,
            full_name=instance.fullname,  # Use the user's fullname as default
            bio="",  # Empty bio initially
            image="default.jpg",  # Default profile image
            verified=False,  # Default value for verified
        )

@receiver(post_save, sender=CustomUser)
def save_user_profile(sender, instance, **kwargs):
    try:
        instance.profile.save()
    except Profile.DoesNotExist:
        # If the profile doesn't exist, create it
        Profile.objects.create(user=instance)

post_save.connect(create_user_profile, sender=CustomUser)
post_save.connect(save_user_profile, sender=CustomUser)

class GameCart(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - {self.game} x {self.quantity}"
    

# class Booking(models.Model):
#     PAYMENT = {
#         ('Cash on delivery', 'Cash on delivery'),
#         ('Esewa', 'Esewa'),
#     }
#     game = models.ForeignKey(Game, on_delete=models.CASCADE)
#     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
#     date_booked = models.DateTimeField(auto_now_add=True)
#     num_game = models.IntegerField(null=True)
#     total_cost = models.IntegerField(null=True)
#     contact_no = models.IntegerField(null=True)
#     address = models.CharField(max_length=200, null=True)
#     payment_method = models.CharField(choices=PAYMENT, max_length=200, null=True)
#     status = models.CharField(default='Pending', max_length=200)
#     payment_status = models.BooleanField(default=False, blank=True, null=True)

#     def __str__(self):
#         return f"{self.user.email} - {self.game.title}"