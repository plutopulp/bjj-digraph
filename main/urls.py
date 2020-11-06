from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("nodes/", include("nodes.urls")),
    path("edges/", include("edges.urls")),
]
