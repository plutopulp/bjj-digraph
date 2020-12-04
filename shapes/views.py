from rest_framework import generics

from .models import NodeShape, GameNodeShape, MetaNodeShape
from .serializers import NodeShapeSerializer, GameNodeShapeSerializer, MetaNodeShapeSerializer
from main.utils.views.permissions import IsOwnerOrReadOnly

formatters = {
    "baseNodeShape": {"model": NodeShape, "serializer_class": NodeShapeSerializer, "list": False},
    "gameNodeShape": {"model": GameNodeShape, "serializer_class": GameNodeShapeSerializer, "list": True},
    "metaNodeShape": {"model": MetaNodeShape, "serializer_class": MetaNodeShapeSerializer, "list": True},
}


class NodeShapeAPIViewMixin:
    """ A mixin for node shape api views with helper and selector methods for getting
    the node shape queryset and model for an incoming request
    """

    def get_queryset_(self):
        """ Returns the correct queryset for the node shape type """
        shape_type = self.request.data["type"]
        user = self.request.user
        return formatters[shape_type]["model"].objects.of_user(user.id)

    def get_serializer_class_(self):
        """ Returns the correct serializer class for the node type """
        shape_type = self.request.data["type"]
        return formatters[shape_type]["serializer_class"]

class NodeShapeCreate(NodeShapeAPIViewMixin, generics.CreateAPIView):
    """ An API view for creating node shapes """
    def get_serializer_class(self):
        return self.get_serializer_class_()
    
    def perform_create(self, serializer):
        user =self.request.user
        serializer.save(owner=user)
    
