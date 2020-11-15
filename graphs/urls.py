from django.urls import path, include
from rest_framework import routers

from .views import GraphViewSet


router = routers.DefaultRouter()
router.register("viewset", GraphViewSet, basename="graphs_viewset")

urlpatterns = [
    path("", include(router.urls)),
]