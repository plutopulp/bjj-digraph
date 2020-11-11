from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from .views import UserViewSet


router = routers.DefaultRouter()
router.register("viewset", UserViewSet, basename="accounts_viewset")

urlpatterns = [
    path("", include(router.urls)),
    path("auth-token/", obtain_auth_token),
]
