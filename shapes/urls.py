from django.urls import path

from .views import NodeShapeDetail, NodeShapeCreate, NodeShapeList

urlpatterns = [
    path("", NodeShapeCreate.as_view()),
    path("<uuid:shape_id>/", NodeShapeDetail.as_view()),
    path("list/", NodeShapeList.as_view()),
]
