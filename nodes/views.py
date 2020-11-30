from rest_framework import generics

from .serializers import NodeSerializer
from .models import Node
from main.utils.views.permissions import IsGraphOwnerOrReadOnly
from main.utils.views.mixins import GraphChildViewMixin, GraphChildListCreateViewMixin


class NodeList(
    GraphChildViewMixin, GraphChildListCreateViewMixin, generics.ListCreateAPIView
):
    """ An API view for listing and creating bjj digraph nodes """

    queryset = Node.objects.all()
    serializer_class = NodeSerializer

    def __init__(self, *args, **kwargs):
        """Overwrite init to associate the model with the view
        Doing this so that can call self.model in Mixin instead of passing
        the class directly throughout methods"""
        super().__init__(*args, **kwargs)
        self.model = Node

    def perform_create(self, serializer):
        """ Add the graph to the node object. """
        self.perform_create_(serializer)

    def list(self, request, graph_id):
        """ Return all the nodes of a given graph """
        return self.list_(request, graph_id)


class NodeDetail(generics.RetrieveUpdateDestroyAPIView):
    """ An API detail view for RUD operations on individual bjj digraph nodes """

    queryset = Node.objects.all()
    serializer_class = NodeSerializer
    permission_classes = [IsGraphOwnerOrReadOnly]

    lookup_field = "id"
    lookup_url_kwarg = "node_id"
