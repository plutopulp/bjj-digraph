from django.urls import path

from .views import (
    NodeListView,
    NodeDetailView,
    GameNodeListView,
    GameNodeDetailView,
    NodeCreate,
)


urlpatterns = [
    path("", NodeListView.as_view()),
    path("<uuid:node_id>/", NodeDetailView.as_view()),
    path("game-nodes/", GameNodeListView.as_view()),
    path("game-nodes/<uuid:node_id>/", GameNodeDetailView.as_view()),
    path("test/", NodeCreate.as_view()),
]
