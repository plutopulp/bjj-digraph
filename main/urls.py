from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("settings/", include("settings.urls")),
    path("user-settings/", include("user_settings.urls")),
    path("accounts/", include("accounts.urls")),
    path("graphs/", include("graphs.urls")),
]
