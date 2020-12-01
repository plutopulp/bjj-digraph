from rest_framework import generics

from .serializers import EdgeSerializer
from .models import Edge
from main.utils.views.generators import list_view_generator, detail_view_generator



EdgeList = list_view_generator(Edge, EdgeSerializer)
EdgeDetail = detail_view_generator(Edge, EdgeSerializer, "edge_id")
