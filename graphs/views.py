from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response

from .serializers import GraphSerializer
from .models import Graph
from main.utils.views.permissions import IsOwnerOrReadOnly


class GraphList(generics.ListCreateAPIView):
    """ An API view for listing and creating bjj digraphs """

    queryset = Graph.objects.all()
    serializer_class = GraphSerializer

    def get_queryset(self):
        """ Return all graphs owned by the user making the request """
        user = self.request.user
        return user.graphs.all()

    def perform_create(self, serializer):
        """ Add the user as the owner of the graph """
        serializer.save(owner=self.request.user)

    def list(self, request):
        """ Returns a list of all graphs owned by the user making the request """
        queryset = self.get_queryset()
        serializer = GraphSerializer(queryset, many=True)
        return Response(serializer.data)


class GraphDetail(generics.RetrieveUpdateDestroyAPIView):
    """ An API detail view for RUD operations on individual bjj digraphs """

    queryset = Graph.objects.all()
    serializer_class = GraphSerializer
    permission_classes = [IsOwnerOrReadOnly]

    lookup_field = "id"
    lookup_url_kwarg = "graph_id"
