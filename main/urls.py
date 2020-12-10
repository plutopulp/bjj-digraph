from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls")),
    path("graphs/", include("graphs.urls")),
    path("user-settings/", include("user_settings.urls")),
]
