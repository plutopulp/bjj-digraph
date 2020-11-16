from django.urls import path

from .views import NodeList, NodeDetail


urlpatterns = [
    path("", NodeList.as_view()),
    path("<uuid:node_id>/", NodeDetail.as_view()),
]
