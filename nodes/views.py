from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response

from .serializers import NodeSerializer
from .models import Node
from graphs.models import Graph
from main.utils.permissions import IsOwnerOrReadOnly, IsGraphOwnerOrReadOnly
from main.utils.mixins import GraphChildViewMixin


class NodeList(GraphChildViewMixin, generics.ListCreateAPIView):
    """ An API view for listing and creating bjj digraph nodes """

    queryset = Node.objects.all()
    serializer_class = NodeSerializer

    def perform_create(self, serializer):
        """ Add the graph to the node object """
        graph = get_object_or_404(Graph, id=self.request.data["graph"])
        serializer.save(graph=graph)

    def list(self, request, graph_id):
        """ Return all the nodes of a given graph """
        return self.list_(Node, request, graph_id)


class NodeDetail(generics.RetrieveUpdateDestroyAPIView):
    """ An API detail view for RUD operations on individual bjj digraph nodes """

    queryset = Node.objects.all()
    serializer_class = NodeSerializer
    permission_classes = [IsGraphOwnerOrReadOnly]

    lookup_field = "id"
    lookup_url_kwarg = "node_id"
