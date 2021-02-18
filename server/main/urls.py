from os import getenv
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path(getenv("SECRET_ADMIN_URL"), admin.site.urls),
    path("api/settings/", include("settings.urls")),
    path("api/user-settings/", include("user_settings.urls")),
    path("api/contacts/", include("contacts.urls")),
    path("api/accounts/", include("accounts.urls")),
    path("api/graphs/", include("graphs.urls")),
]
