from django.shortcuts import get_object_or_404
from rest_framework import generics, response
from graphs.models import Graph


class GraphChildViewMixin:
    """ " An API View mixin for graph children objects. E.g. NodeViews and EdgeViews
    Child here refers to node or edge object"""

    def get_graph(self, graph_id):
        """Returns the specific graph targetted by a request,
        which is encoded in the url kwargs"""
        graph = get_object_or_404(Graph, id=graph_id)
        return graph

    def get_child_qs(self, graph_id):
        """" Returns the child queryset of the target graph """
        queryset = self.model.objects.filter(graph=graph_id)
        return queryset

    def get_child(self, graph_id, child_id):
        """For child detail views. Returns the child of a graph-specific
        queryset from the child id encoded in the url kwargs"""
        queryset = self.get_child_qs(graph_id)
        child = get_object_or_404(queryset, id=child_id)
        return child

    def list_(self, request, graph_id):
        """ Return all the children of a given graph """
        queryset = self.get_child_qs(graph_id)
        serializer = self.get_serializer(queryset, many=True)
        return response.Response(serializer.data)


class GraphChildListCreateViewMixin:
    """A ListCreateAPIView mixin for graph children objects. E.g. NodeViews and EdgeViews
    Child here refers to node or edge object"""

    def list_(self, request, graph_id):
        """ Return all the children of a given graph """
        queryset = self.get_child_qs(graph_id)
        serializer = self.get_serializer(queryset, many=True)
        return response.Response(serializer.data)

    def perform_create_(self, serializer):
        """ Add the graph to the child object. """
        graph_id = self.request.resolver_match.kwargs["graph_id"]
        graph = self.get_graph(graph_id)
        serializer.save(graph=graph)
