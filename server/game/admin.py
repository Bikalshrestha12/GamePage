from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Register your models here.

class UserModelAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    # form = UserChangeForm
    # add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserModelAdmin
    # that reference specific fields on auth.User.
    list_display = ["id", "email", "fullname", 'tc', "is_admin"]
    list_filter = ["is_admin"]
    fieldsets = [
        (None, {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["fullname"]}),
        ("Personal info", {"fields": ["tc"]}),
        ("Permissions", {"fields": ["is_admin"]}),
    ]
    # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "fullname", 'tc', "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email", "id"]
    filter_horizontal = []

# class UserAdmin(admin.ModelAdmin):
#     list_display = ['email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display =['user', 'full_name', 'verified']


admin.site.register(Game)
admin.site.register(CustomUser, UserModelAdmin)
# admin.site.register(CustomUser, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(GameCart)
# admin.site.register(User)
# admin.site.register(CustomUser)

