from rest_framework import generics
from django.shortcuts import get_object_or_404

from graphs.models import Graph
from .models import Node, GameNode, MetaNode
from .serializers import NodeSerializer, GameNodeSerializer, MetaNodeSerializer
from main.utils.views.generators import detail_view_generator, list_view_generator


NodeDetailView = detail_view_generator(Node, NodeSerializer, "node_id")
NodeListView = list_view_generator(Node, NodeSerializer)

GameNodeDetailView = detail_view_generator(GameNode, GameNodeSerializer, "node_id")
GameNodeListView = list_view_generator(GameNode, GameNodeSerializer)

MetaNodeDetailView = detail_view_generator(MetaNode, MetaNodeSerializer, "node_id")
MetaNodeListView = list_view_generator(MetaNode, MetaNodeSerializer)

formatters = {
    "base": {"model": Node, "serializer_class": NodeSerializer},
    "game": {"model": GameNode, "serializer_class": GameNodeSerializer},
    "meta": {"model": MetaNode, "serializer_class": MetaNodeSerializer},
}


class NodeCreate(generics.CreateAPIView):
    """An API view for creating nodes of different types.
    The node type is required in the body of the request.
    """

    def get_queryset(self):
        node_type = self.request.data["type"]
        return formatters[node_type]["model"].objects.all()

    def get_serializer_class(self):
        node_type = self.request.data["type"]
        return formatters[node_type]["serializer_class"]

    def perform_create(self, serializer):
        graph_id = self.request.resolver_match.kwargs["graph_id"]
        graph = get_object_or_404(Graph, id=graph_id)
        serializer.save(graph=graph)
