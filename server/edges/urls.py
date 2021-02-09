from django.urls import path

from .views import EdgeList, EdgeDetail

urlpatterns = [
    path("", EdgeList.as_view()),
    path("<uuid:edge_id>/", EdgeDetail.as_view()),
]
