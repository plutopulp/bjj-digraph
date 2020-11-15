from django.shortcuts import render
from rest_framework import viewsets

from .serializers import GraphSerializer
from .models import Graph


class GraphViewSet(viewsets.ModelViewSet):
    """ A rest-api viewset for viewing and editing bjj digraphs """

    serializer_class = GraphSerializer
    queryset = Graph.objects.all()
