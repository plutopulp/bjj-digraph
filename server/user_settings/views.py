from django.shortcuts import get_object_or_404
from rest_framework import generics

from .models import UserNodeSettings
from .serializers import UserNodeSettingsSerializer
from utils.views.permissions import IsOwnerOrReadOnly


class UserNodeSettingsAPIViewMixin:
    """ A mixin for node user settings api views. """

    def get_queryset(self):
        """ Returns the node settings queryset owned by the user """
        user = self.request.user
        return UserNodeSettings.objects.of_user(user)

    def get_serializer_class(self):
        return UserNodeSettingsSerializer


class UserNodeSettingsDetail(
    UserNodeSettingsAPIViewMixin, generics.RetrieveUpdateDestroyAPIView
):
    """ A detail API view for RUD operations on node settings """

    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = "id"
    lookup_url_kwarg = "node_settings_id"


class UserNodeSettingsList(UserNodeSettingsAPIViewMixin, generics.ListAPIView):
    """A list API view for all node settings of a given user.
    The mixins do all the work"""

    pass
