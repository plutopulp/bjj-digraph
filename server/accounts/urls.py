from django.urls import path

from .views import public, private, private_scoped


urlpatterns = [
    path("public/", public),
    path("private/", private),
    path("private-scoped/", private_scoped),
]
