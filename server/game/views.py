# from django.shortcuts import render
# from .models import *
# from .serializers import GameSerializer, UserSerializer
# from rest_framework import viewsets
# from rest_framework.response import Response
# from rest_framework.permissions import AllowAny
# # from rest_framework_simplejwt.tokens import RefreshToken
# from django.contrib.auth import authenticate
from rest_framework.decorators import action
from django.contrib.auth import authenticate
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken  # type: ignore
# from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken
from rest_framework import serializers
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import logout
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required



# from .serializers import UserSerializer, LoginSerializer

from .models import *
from .serializers import *
from .renders import *

import logging
logger = logging.getLogger(__name__)

# generate token manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


# Create your views here.


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def get_queryset(self):
        queryset = Game.objects.all()
        title = self.request.query_params.get("title", None)
        if title is not None:
            queryset = queryset.filter(title__icontains=title)
        return queryset

class GameDetailViewSet(viewsets.ViewSet):
    renderer_classes = [UserRenders]

    def retrieve(self, request, pk=None):
        try:
            game = Game.objects.get(pk=pk)
        except Game.DoesNotExist:
            return Response({"detail": "Game not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = GameSerializer(game)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list(self, request):
        return Response(
            {"detail": "Please provide a Game ID in the URL."},
            status=status.HTTP_400_BAD_REQUEST
        )

class UserRegisterViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserRegistrationSerializer
    renderer_classes = [UserRenders]

    def post(self, request, format=None):
        queryset = CustomUser.objects.all()
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response(
                {"token": token, "msg": "Registration Success"},
                status=status.HTTP_201_CREATED,
            )
        # print(serializer.errors)
        return Response(
            {"msg": "Registration Failed"}, status=status.HTTP_400_BAD_REQUEST
        )

# class UserLoginViewSet(viewsets.ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserLoginSerializer
#     renderer_classes = [UserRenders]
#     # permission_classes = [IsAuthenticated]

#     def post(self, request, format=None):
#         serializer = UserLoginSerializer(data=request.data)
#         logger.debug(f"Request data: {request.data}")
#         if serializer.is_valid():
#             data = serializer.validated_data
#             user = authenticate(
#                 request, email=data["email"], password=data["password"]
#             )
#             if user is not None:
#                 token = get_tokens_for_user(user)
#                 return Response(
#                     {
#                         "token": {"access": token},
#                         "user": {
#                             "email": user.email,
#                             "role": "admin" if user.is_admin else "user",
#                         },
#                     },
#                     status=status.HTTP_200_OK,
#                 )
#             return Response(
#                 {"error": "Invalid username or password"},
#                 status=status.HTTP_401_UNAUTHORIZED,
#             )
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]  # Allow access to any user (no authentication required)

    def create(self, request, *args, **kwargs):
        """
        Handle login by authenticating the user and generating a token.
        """
        # Initialize the serializer with the incoming data
        serializer = UserLoginSerializer(data=request.data)
        
        if serializer.is_valid():
            # Extract the validated data
            data = serializer.validated_data
            user = data["user"]
            
            # Generate a token for the authenticated user
            token = get_tokens_for_user(user)
            
            # Return the token and user info in the response
            return Response(
                {
                    "token": {"access": token},
                    "user": {
                        "email": user.email,
                        "role": "admin" if user.is_admin else "user",
                    },
                },
                status=status.HTTP_200_OK,
            )
        
        # If the serializer is not valid, return a 400 error with the validation error
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AuthViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['post'])
    def logout(self, request):
        try:
            # Retrieve the JWT token from the request
            token = request.auth  # `request.auth` should have the token from JWT Authentication
            if token:
                # Blacklist the token to prevent further usage (if using SimpleJWT's blacklist)
                BlacklistedToken.objects.create(token=token)

            # Return a response confirming logout
            return Response({"message": "Successfully logged out."}, status=200)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
                    
# class UserLoginViewSet(viewsets.ModelViewSet):  # use ViewSet instead of ModelViewSet for login
#     queryset = CustomUser.objects.all()
#     serializer_class = UserLoginSerializer
#     renderer_classes = [UserRenders]

#     def post(self, request, format=None):
#         queryset = CustomUser.objects.all()
#         serializer = UserLoginSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             email = serializer.validated_data["email"]
#             password = serializer.validated_data["password"]
#             print(f"Attempting login for email: {email}")


#             user = authenticate(request, username=email, password=password)
#             if user is None:
#                 print("Authentication failed")
#             # print("DEBUG - User:", user)
#             # print(f"Authenticated user: {user}")
#             if user is not None:
#                 # 🔐 Generate real JWT tokens
#                 token = get_tokens_for_user(user)
#                 return Response(
#                     {
#                         # 'access': access_token,
#                         "token": {'access': token},
#                         "user": {
#                             "email": user.email,
#                             "role": "admin" if user.is_admin else "user",
#                         },
#                     },
#                     status=status.HTTP_200_OK,
#                 )
#             return Response(
#                 {"error": "Invalid email or password"},
#                 status=status.HTTP_401_UNAUTHORIZED,
#             )
        # return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# class UserLoginViewSet(viewsets.ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserLoginSerializer
#     renderer_classes = [UserRenders]

#     def post(self, request):
#         serializer = UserLoginSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             email = serializer.validated_data["email"]
#             password = serializer.validated_data["password"]

#             # ✅ Correct usage of authenticate
#             user = authenticate(request, username=email, password=password)
            
#             print("DEBUG - User:", user)
#             if user is not None:
#                 # 🔐 Generate JWT token (assuming you already have this function implemented)
#                 token = get_tokens_for_user(user)
#                 return Response(
#                     {
#                         "token": token,
#                         "user": {
#                             "email": user.email,
#                             "role": "admin" if user.is_admin else "user",
#                         },
#                     },
#                     status=status.HTTP_200_OK,
#                 )
#             # If user is not authenticated
#             return Response(
#                 {"error": "Invalid email or password"},
#                 status=status.HTTP_401_UNAUTHORIZED,
#             )

# class UserProfileViewSet(viewsets.ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserProfileSerializer
#     renderer_classes = [UserRenders]
#     permission_classes = [IsAuthenticated]

#     @action(detail=False, methods=["get"], url_path="me")
#     def me(self, request):
#         serializer = self.get_serializer(request.user)
#         return Response(serializer.data, status=status.HTTP_200_OK)


class UserProfileViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenders]

    def list(self, request):
        # This handles GET /api/profile/
        user = request.user
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# class UserProfileViewSet(viewsets.ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserProfileSerializer
#     renderer_classes = [UserRenders]
#     permission_classes = [IsAuthenticated]

#     @action(detail=False, methods=['get'])
#     def get_current_user(self, request, format =None):
#         queryset = CustomUser.objects.get(user = request.user)
#         serializer = self.get_serializer(request.user)
#         # serializer = UserProfileSerializer(request.user)
#         # if serializer.is_valid():
#         return Response(serializer.data, status=status.HTTP_200_OK)

class UserChangePasswordViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserChangePasswordSerializer
    renderer_classes = [UserRenders]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = UserChangePasswordSerializer(data=request.data, context={'user': request.customuser})
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': "Password changed successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# class SendPasswordRestEmailViewSet(viewsets.ViewSet):
#     serializer_class = SendEmailPasswordSerializer
#     # permission_classes = [IsAuthenticated]
#     renderer_classes = [UserRenders]

#     def post(self, request, format=None):
#         serializer = self.serializer_class(data = request.data)
#         if serializer.is_valid(raise_exception=True):
#             return Response({'msg':"password rest link send. Pleach check your Email"}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        
    

class GameCartViewSet(viewsets.ModelViewSet):
    queryset = GameCart.objects.all()
    serializer_class = UserGameCartSerializer
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenders]

    def get_queryset(self):
        # Ensure users only see their own cart
        user = self.request.user
        queryset = GameCart.objects.filter(user=user)

        game_id = self.request.query_params.get('game_id')
        if game_id:
            queryset = queryset.filter(game__id=game_id)

        return queryset
    

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        if not serializer.is_valid():
            print("❌ Serializer update errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        self.perform_update(serializer)
        return Response(serializer.data)
    

class PaymentViewSet(viewsets.ModelViewSet):
    pass 

# class GameCartViewSet(viewsets.ModelViewSet):
#     queryset = GameCart.objects.all()
#     serializer_class = UserGameCartSerializer
#     permission_classes = [IsAuthenticated]
#     renderer_classes = [UserRenders]
#     lookup_field = 'game_id'

#     def post(self, request):
#         serializer = UserGameCartSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=self.request.user)  # Optional: if you want to associate the cart with the logged-in user
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class GameCartViewSet(viewsets.ModelViewSet):
#     queryset = GameCart.objects.all()
#     serializer_class = UserGameCartSerializer
#     permission_classes = [IsAuthenticated]
#     renderer_classes = [UserRenders]
#     def get_queryset(self):
#             queryset = GameCart.objects.all()
#             title = self.request.query_params.get("title", None)
#             if title is not None:
#                 queryset = queryset.filter(title__icontains=title)
#             return queryset

    # @action(detail=False, methods=['post'])
    # def change_password(self, request):
    #     serializer = UserChangePasswordSerializer(data=request.data, context={'CustomUser': request.user} )
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response({'msg': "Password changed successfully"}, status=status.HTTP_200_OK)
    #     print("DEBUG ERRORS:", serializer.errors)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# class UserLoginViewSet(viewsets.ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserLoginSerializer
#     renderer_classes = [UserRenders]

#     def post(self, request, format = None):
#         queryset = CustomUser.objects.all()
#         serializer = UserLoginSerializer(data = request.data)
#         if serializer.is_valid(raise_exception=True):
#             email = serializer.data.get('email')
#             password = serializer.data.get('password')
#             user = authenticate(request, email=email, password = password)
#             if user is not None:
#                 token = get_tokens_for_user(user)
#                 return Response({'token':token, 'smg':'Login Success'}, status=status.HTTP_200_OK)
#             else:
#                 return Response({'error':{'none_filed_error':['Email or Password is not valid']}}, status=status.HTTP_404_NOT_FOUND)

# class RegisterViewSet(APIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = RegisterSerializer

#     def post(self, request):
#         queryset = CustomUser.objects.all()
#         serializer = RegisterSerializer(data=request.data)
#         if serializer.is_valid():
#             queryset = serializer.save()
#             return Response(UserSerializer(queryset).data, status=201)
#         return Response(serializer.errors, status=400)

# class LoginViewSet(APIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserSerializer

#     def post(self, request):
#         querset = CustomUser.objects.all()

#         user = authenticate(
#             username=request.data.get("username"),
#             password=request.data.get("password")
#         )
#         if user:
#             refresh = RefreshToken.for_user(user)
#             return Response({
#                 'access': str(refresh.access_token),
#                 'refresh': str(refresh),
#                 'user': UserSerializer(user).data
#             })
#         return Response({'error': 'Invalid Credentials'}, status=401)

# class UserLoginView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         email = request.data.get("email")
#         password = request.data.get("password")

#         user = authenticate(username=email, password=password)
#         if user is not None:
#             refresh = RefreshToken.for_user(user)
#             access_token = str(refresh.access_token)

#             # If the user is an admin, set the flag in the response
#             is_admin = user.is_superuser

#             return Response({"access": access_token, "is_admin": user.is_staff}, status=status.HTTP_200_OK)

#         return Response({"detail": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


# class LoginView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         serializer = LoginSerializer(data=request.data)
#         if serializer.is_valid():
#             username = serializer.validated_data['username']
#             password = serializer.validated_data['password']
#             user = authenticate(username=username, password=password)

#             if user is not None:
#                 if user.is_superuser:
#                     return Response({'message': 'Admin login successful', 'role': 'admin'}, status=status.HTTP_200_OK)
#                 else:
#                     return Response({'message': 'User login successful', 'role': 'user'}, status=status.HTTP_200_OK)
#             else:
#                 return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class UserSignupView(APIView):
#     permission_classes = [AllowAny]

#     def post(self, request):
#         data = request.data
#         serializer = UserSerializer(data=data)

#         if serializer.is_valid():
#             user = serializer.save()
#             user.set_password(data["password"])
#             user.save()

#             return Response({"detail": "User created successfully"}, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
