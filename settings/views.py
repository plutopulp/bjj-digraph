from rest_framework import generics, permissions
from drf_multiple_model.views import FlatMultipleModelAPIView
from .models import SiteSettings, GameNodeSettings, MetaNodeSettings
from .serializers import (
    SiteSettingsSerializer,
    GameNodeSettingsSerializer,
    MetaNodeSettingsSerializer,
)

formatters = {
    "gameNode": {
        "model": GameNodeSettings,
        "serializer_class": GameNodeSettingsSerializer,
        "label": "gameNode",
        "list": True,
    },
    "metaNode": {
        "model": MetaNodeSettings,
        "serializer_class": MetaNodeSettingsSerializer,
        "label": "metaNode",
        "list": True,
    },
}

# Any modification of base settings is currently being implemented
# in the django admin. The views here simply provide setting detail/lists for
# the client.


class SiteSettingsRetrieve(generics.RetrieveAPIView):
    """ A retrieve API view for the general site settings """

    permission_classes = [permissions.AllowAny]
    serializer_class = SiteSettingsSerializer

    def get_object(self):
        return SiteSettings.load()


class NodeSettingsList(FlatMultipleModelAPIView):
    """ A list API view for all base node settings """

    permission_classes = [permissions.AllowAny]

    def get_querylist(self):
        querylist = [
            {
                "queryset": formatter["model"].objects.all(),
                "serializer_class": formatter["serializer_class"],
                "label": formatter["label"],
            }
            for _, formatter in formatters.items()
            if formatter["list"]
        ]
        return querylist
