from django.urls import path, include
from rest_framework import routers

from .views import EdgeViewSet


router = routers.DefaultRouter()
router.register("viewset", EdgeViewSet, basename="edges_viewset")

urlpatterns = [
    path("", include(router.urls)),
]
