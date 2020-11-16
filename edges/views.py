from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response

from .serializers import EdgeSerializer
from .models import Edge
from graphs.models import Graph
from main.utils.views.permissions import IsOwnerOrReadOnly, IsGraphOwnerOrReadOnly
from main.utils.views.mixins import GraphChildViewMixin, GraphChildListCreateViewMixin


class EdgeList(
    GraphChildViewMixin, GraphChildListCreateViewMixin, generics.ListCreateAPIView
):
    """ An API view for listing and creating bjj digraph edges """

    queryset = Edge.objects.all()
    serializer_class = EdgeSerializer

    def __init__(self, *args, **kwargs):
        """Overwrite init to associate the model with the view
        Doing this so that can call self.model in Mixin instead of passing
        the class directly throughout methods"""
        super().__init__(*args, **kwargs)
        self.model = Edge

    def perform_create(self, serializer):
        """ Add the graph to the Edge object. """
        self.perform_create_(serializer)

    def list(self, request, graph_id):
        """ Return all the edges of a given graph """
        return self.list_(request, graph_id)


class EdgeDetail(generics.RetrieveUpdateDestroyAPIView):
    """ An API detail view for RUD operations on individual bjj digraph edges """

    queryset = Edge.objects.all()
    serializer_class = EdgeSerializer
    permission_classes = [IsGraphOwnerOrReadOnly]

    lookup_field = "id"
    lookup_url_kwarg = "edge_id"
