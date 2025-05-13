"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from game.views import *
from rest_framework import routers
from rest_framework.routers import DefaultRouter
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )


route = routers.DefaultRouter()
route.register('game', GameViewSet, basename='gameview')
route.register('gamedetail', GameDetailViewSet, basename='gamedetail')
route.register('register', UserRegisterViewSet, basename='register')
route.register('login', UserLoginViewSet, basename='login')
route.register('profile', UserProfileViewSet, basename='profile')
route.register('changepassword', UserChangePasswordViewSet, basename='changepassword')
route.register('gamecart', GameCartViewSet, basename='gamecart')
route.register('auth', AuthViewSet, basename='auth')
# route.register('send-reset-password-email', SendPasswordRestEmailViewSet, basename='send-reset-password-email')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    # path('api/login/', UserLoginAPIView.as_view(), name='login')
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
