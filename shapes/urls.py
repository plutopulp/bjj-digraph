from django.urls import path 

from .views import NodeShapeDetail

urlpatterns = [
    path("", NodeShapeDetail.as_view()),
]