from django.urls import path

from .views import NodeShapeDetail, NodeShapeCreate

urlpatterns = [
    path("", NodeShapeCreate.as_view()),
]
