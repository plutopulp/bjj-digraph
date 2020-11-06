from django.shortcuts import render
from rest_framework import viewsets

from .serializers import EdgeSerializer
from .models import Edge


class EdgeViewSet(viewsets.ModelViewSet):
    """ A rest-api viewset for viewing and editing bjj digraph edges """

    serializer_class = EdgeSerializer
    queryset = Edge.objects.all()
