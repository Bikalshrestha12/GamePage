from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        User = get_user_model()
        try:
            user = User.objects.get(email=username)
        except User.DoesNotExist:
            return None
        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None


# from django.contrib.auth.backends import ModelBackend
# from .models import CustomUser

# class EmailBackend(ModelBackend):
#     def authenticate(self, request, email=None, password=None, **kwargs):
#         try:
#             user = CustomUser.objects.get(email=email)
#             if user.check_password(password):
#                 return user
#         except CustomUser.DoesNotExist:
#             return None