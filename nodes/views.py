from rest_framework import generics
from django.shortcuts import get_object_or_404
from drf_multiple_model.views import FlatMultipleModelAPIView

from graphs.models import Graph
from .models import Node, ScoreNode, MetaNode
from .serializers import NodeSerializer, ScoreNodeSerializer, MetaNodeSerializer
from utils.views.permissions import IsGraphOwnerOrReadOnly


formatters = {
    "all": {"model": Node, "serializer_class": NodeSerializer, "list": False},
    "score": {
        "model": ScoreNode,
        "serializer_class": ScoreNodeSerializer,
        "list": True,
    },
    "meta": {
        "model": MetaNode,
        "serializer_class": MetaNodeSerializer,
        "list": True,
    },
}


class NodeAPIViewMixin:
    """A mixin for node api views with helper and selector methods for getting
    the node queryset and model for an incoming request
    """

    permission_classes = [IsGraphOwnerOrReadOnly]

    def get_graph_id(self):
        """ Returns the graph id from the url """
        graph_id = self.request.resolver_match.kwargs["graph_id"]
        return graph_id

    def get_base_node_type(self):
        """Extracts the base node type, e.g. score, meta etc.. """
        # No payload in request body
        if self.request.method == "DELETE":
            node_id = self.request.resolver_match.kwargs["node_id"]
            complete_type = get_object_or_404(Node, id=node_id).node_type
        # Node type in payload
        else:
            complete_type = self.request.data["type"]

        base_type = complete_type.split("-")[0]
        return base_type

    def get_queryset(self):
        """ Returns the correct queryset for the node type """
        node_type = self.get_base_node_type()
        return formatters[node_type]["model"].objects.all()

    def get_serializer_class(self):
        """ Returns the correct serializer class for the node type """
        node_type = self.get_base_node_type()
        return formatters[node_type]["serializer_class"]


class NodeDetail(NodeAPIViewMixin, generics.RetrieveUpdateDestroyAPIView):
    """A detail API view for RUD operations on nodes of different types.
    The node type is required in the body of the request.
    """

    lookup_field = "id"
    lookup_url_kwarg = "node_id"


class NodeList(NodeAPIViewMixin, generics.CreateAPIView, FlatMultipleModelAPIView):
    """A List + Create API view for retrieving all nodes of a graph (multiple types)
    and creating any node type instance """

    add_model_type = False
    
    def perform_create(self, serializer):
        graph_id = self.get_graph_id()
        graph = get_object_or_404(Graph, id=graph_id)
        serializer.save(graph=graph)

    def get_querylist(self):
        querylist = [
            {
                "queryset": formatter["model"].objects.of_graph(self.get_graph_id()),
                "serializer_class": formatter["serializer_class"],
            }
            for _, formatter in formatters.items()
            if formatter["list"]
        ]
        return querylist
