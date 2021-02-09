from django.urls import path, include
from rest_framework import routers

from .views import GraphList, GraphDetail


urlpatterns = [
    path("", GraphList.as_view()),
    path("<uuid:graph_id>/", GraphDetail.as_view()),
    # Endpoints for the nodes of a specific graph
    path("<uuid:graph_id>/nodes/", include("nodes.urls")),
    # Endpoints for the edges of a specific graph
    path("<uuid:graph_id>/edges/", include("edges.urls")),
]
