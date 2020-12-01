from rest_framework import generics

from .serializers import NodeSerializer, GameNodeSerializer, MetaNodeSerializer
from .models import Node, GameNode, MetaNode
from main.utils.views.permissions import IsGraphOwnerOrReadOnly
from main.utils.views.mixins import GraphChildViewMixin, GraphChildListCreateViewMixin


def node_detail_view_generator(model, serializer):
    """ An API detail view generator for RUD operations on individual bjj digraph nodes """
    class NodeDetailView(generics.RetrieveUpdateDestroyAPIView):
        queryset = model.objects.all()
        serializer_class = serializer
        permission_classes = [IsGraphOwnerOrReadOnly]

        lookup_field = "id"
        lookup_url_kwarg = "node_id"
    
    return NodeDetailView


def node_list_view_generator(model, serializer):
    """ An API view generator for listing and creating bjj digraph nodes """
    class NodeListView(GraphChildViewMixin, GraphChildListCreateViewMixin, generics.ListCreateAPIView):
        queryset = model.objects.all()
        serializer_class = serializer

        def __init__(self, *args, **kwargs):
            """Overwrite init to associate the model with the view
            Doing this so that can call self.model in Mixin instead of passing
            the class directly throughout methods"""
            super().__init__(*args, **kwargs)
            self.model = model

        def perform_create(self, serializer):
            """ Add the graph to the node object. """
            self.perform_create_(serializer)

        def list(self, request, graph_id):
            """ Return all the nodes of a given graph """
            return self.list_(request, graph_id)
            
    return NodeListView


NodeDetailView = node_detail_view_generator(Node, NodeSerializer)
NodeListView = node_list_view_generator(Node, NodeSerializer)

GameNodeDetailView = node_detail_view_generator(GameNode, GameNodeSerializer)
GameNodeListView = node_list_view_generator(GameNode, GameNodeSerializer)

MetaNodeDetailView = node_detail_view_generator(MetaNode, MetaNodeSerializer)
MetaNodeListView = node_list_view_generator(MetaNode, MetaNodeSerializer)
