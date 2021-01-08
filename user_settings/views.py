from django.shortcuts import get_object_or_404
from rest_framework import generics
from drf_multiple_model.views import FlatMultipleModelAPIView

from .models import UserNodeSettings
from .serializers import UserNodeSettingsSerializer
from utils.views.permissions import IsOwnerOrReadOnly


formatters = {
    "all": {
        "model": UserNodeSettings,
        "serializer_class": UserNodeSettingsSerializer,
        "list": True,
    },
    
}

class UserNodeSettingsAPIViewMixin:
    """A mixin for node settings api views with helper and selector methods for getting
    the node settings queryset and model for an incoming request
    """

    def get_queryset(self):
        """ Returns the correct queryset for the node settings type """
        node_type = self.request.data["type"]
        user = self.request.user
        return formatters[node_type]["model"].objects.of_user(user)

    def get_serializer_class(self):
        """ Returns the correct serializer class for the node settings type """
        node_type = self.request.data["type"]
        return formatters[node_type]["serializer_class"]


class UserNodeSettingsCreate(UserNodeSettingsAPIViewMixin, generics.CreateAPIView):
    """ An API view for creating node settings """

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserNodeSettingsDetail(
    UserNodeSettingsAPIViewMixin, generics.RetrieveUpdateDestroyAPIView
):
    """ A detail API view for RUD operations on node settings """

    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = "id"
    lookup_url_kwarg = "node_settings_id"


class UserNodeSettingsList(FlatMultipleModelAPIView):
    """ A list API view for all node settings of a given user """

    add_model_type = False

    def get_querylist(self):
        querylist = [
            {
                "queryset": formatter["model"].objects.of_user(self.request.user),
                "serializer_class": formatter["serializer_class"],
            }
            for _, formatter in formatters.items()
            if formatter["list"]
        ]
        return querylist
