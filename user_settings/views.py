from django.shortcuts import get_object_or_404
from rest_framework import generics
from drf_multiple_model.views import FlatMultipleModelAPIView

from .models import UserGameNodeSettings, UserMetaNodeSettings
from .serializers import GameNodeSettingsSerializer, MetaNodeSettingsSerializer
from utils.views.permissions import IsOwnerOrReadOnly

formatters = {
    "gameNodeSettings": {
        "model": UserGameNodeSettings,
        "serializer_class": GameNodeSettingsSerializer,
        "list": True,
    },
    "metaNodeSettings": {
        "model": UserMetaNodeSettings,
        "serializer_class": MetaNodeSettingsSerializer,
        "list": True,
    },
}


class NodeSettingsAPIViewMixin:
    """A mixin for node settings api views with helper and selector methods for getting
    the node settings queryset and model for an incoming request
    """

    def get_queryset(self):
        """ Returns the correct queryset for the node shape type """
        shape_type = self.request.data["type"]
        user = self.request.user
        return formatters[shape_type]["model"].objects.get_object_or_404(owner=user)

    def get_serializer_class(self):
        """ Returns the correct serializer class for the node type """
        shape_type = self.request.data["type"]
        return formatters[shape_type]["serializer_class"]


class NodeShapeCreate(NodeShapeAPIViewMixin, generics.CreateAPIView):
    """ An API view for creating node shapes """

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class NodeShapeDetail(NodeShapeAPIViewMixin, generics.RetrieveUpdateDestroyAPIView):
    """ A detail API view for RUD operations on node shapes """

    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = "id"
    lookup_url_kwarg = "shape_id"


class NodeShapeList(FlatMultipleModelAPIView):
    """ A list API view for all node shapes of a giveb user """

    def get_querylist(self):
        querylist = [
            {
                "queryset": formatter["model"].objects.get(owner=self.request.user),
                "serializer_class": formatter["serializer_class"],
            }
            for _, formatter in formatters.items()
            if formatter["list"]
        ]
        return querylist
