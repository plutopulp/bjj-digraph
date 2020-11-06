from django.shortcuts import render
from rest_framework import viewsets

from .serializers import NodeSerializer
from .models import Node


class NodeViewSet(viewsets.ModelViewSet):
    """ A rest-api viewset for viewing and editing bjj digraph nodes """

    serializer_class = NodeSerializer
    queryset = Node.objects.all()
