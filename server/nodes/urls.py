from django.urls import path

from .views import (
    NodeDetail,
    NodeList,
)

urlpatterns = [
    path("", NodeList.as_view()),
    path("<uuid:node_id>/", NodeDetail.as_view()),
]
