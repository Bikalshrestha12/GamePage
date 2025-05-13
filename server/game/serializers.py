from rest_framework import serializers
from .models import CustomUser, Profile, Game, GameCart
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email']

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        if hasattr(user, 'profile'):
            token['full_name'] = user.profile.full_name
            token['email'] = user.profile.user.email
            token['bio'] = user.profile.bio
            token['image'] = user.profile.image.url if user.profile.image else None
            token['verified'] = user.profile.verified
        else:
            token['full_name'] = user.fullname
            token['email'] = user.email
            token['bio'] = ''
            token['image'] = None
            token['verified'] = False

        return token

class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = CustomUser
        fields = ["email", "fullname", "password", "password2", "tc"]
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def validate(self, attrs):
        password = attrs.get("password")
        password2 = attrs.get("password2")

        if password != password2:
            raise serializers.ValidationError(
                "Password and Confirm Password do not match."
            )

        if attrs.get("tc") is None:
            raise serializers.ValidationError(
                "You must accept the terms and conditions (tc)."
            )

        return attrs

    def create(self, validated_data):
        user = CustomUser.objects.create(
            email=validated_data['email'],
            fullname=validated_data['fullname'],
            tc=validated_data['tc'],
        )
        user.set_password(validated_data['password'])
        user.save()

        return user
        # validated_data.pop("password2")  # Remove the confirm password
        # return CustomUser.objects.create_user(**validated_data)


# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.EmailField(max_length = 250)
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = CustomUser
#         fields = ['email', 'password']


# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True)

#     def validate(self, data):
#         user = authenticate(email=data["email"], password=data["password"])
#         if not user:
#             raise serializers.ValidationError("Invalid Email or password")
#         data["user"] = user
#         return data

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(email=data.get("email"), password=data.get("password"))
        if not user:
            raise serializers.ValidationError("Invalid email or password")
        data["user"] = user
        return data

    # def validate(self, data):
    #     if 'tc' not in data or not data['tc']:
    #         raise serializers.ValidationError("The 'tc' field cannot be empty.")
    #     return data


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser  # ✅ fix the typo here
        fields = ["id", "email", "fullname"]


class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )
    password2 = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )

    def validate(self, data):
        password = data.get("password")
        password2 = data.get("password2")
        customuser = self.context.get("customuser")

        # if not customuser:
        #     raise serializers.ValidationError("User not found or not authenticated.")  # 🔐 Safety

        if password != password2:
            raise serializers.ValidationError(
                "Password and Confirm Password do not match."
            )

        customuser.set_password(password)
        customuser.save()
        return data


# class SendEmailPasswordSerializer(serializers.Serializer):
#     email = serializers.EmailField(max_length=255)
#     class Meta:
#         fields = ['email']

#         def validata(self, data):
#             email = data.get('email')
#             if CustomUser.objects.all(email=email).exists():
#                 user = CustomUser.objects.get(email=email)
#                 uid = urlsafe_base64_encode(force_bytes(user.id))
#                 print('Encode UID', uid)
#                 token = PasswordResetTokenGenerator().make_token(user)
#                 print("password reset token", token)
#                 link = 'http://localhost:3000/api/user/reset/'+uid+'/'+token
#                 print('password reset link', link)

#                 return data

#             else:
#                 raise ValueError('You are not Registered User')
#             return super().validata(data)


class UserGameCartSerializer(serializers.ModelSerializer):
    game = serializers.PrimaryKeyRelatedField(queryset=Game.objects.all())

    class Meta:
        model = GameCart
        fields = ["game_id", "game", "quantity"]


# class UserLoginSerializer(serializers.ModelSerializer):
#     email = serializers.EmailField(max_length = 250)
#     password = serializers.CharField()

#     class Meta:
#         model: CustomUser
#         fields = ['email', 'password']

# password2 = serializers.CharField(style={'onput_type':'password'}, write_only = True)
# class UserRegistrationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ['email', 'fullname', 'password', 'password2', 'tc']
#         extra_kwargs = {
#             'password':{'write_only':True},
#         }

#     # validating passowrd and confirm password while registion
#     def validate(self, data):
#         password = data.get('password')
#         password2 = data.get('password2')

#         if password != password2:
#             raise serializers.ValidationError("password and confirm password doesn't match ")
#         return data

#     def create(self, validated_data):
#         return CustomUser.objects.create_user(**validated_data)
# https://www.youtube.com/watch?v=lo7lBD9ynVc
# https://www.youtube.com/watch?v=jv8G4kfjn4w&list=PLPip5lOh2Z5Cms1C6g0GHgHiaXnXCmYm1&index=2

# https://www.youtube.com/watch?v=8d1HgJTEGe8
