from django.urls import path, include
from rest_framework import routers

from .views import NodeViewSet


router = routers.DefaultRouter()
router.register("viewset", NodeViewSet, basename="nodes_viewset")

urlpatterns = [
    path("", include(router.urls)),
]
