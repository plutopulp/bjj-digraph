from django.urls import path

from .views import (
    NodeCreate,
    NodeDetail,
    NodeList,
)

urlpatterns = [
    path("", NodeCreate.as_view()),
    path("<uuid:node_id>/", NodeDetail.as_view()),
    path("list/", NodeList.as_view()),
]
