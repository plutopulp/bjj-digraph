from django.contrib import admin

from .models import UserGameNodeSettings, UserMetaNodeSettings

admin.site.register(UserGameNodeSettings)
admin.site.register(UserMetaNodeSettings)
