from rest_framework import generics, permissions
from drf_multiple_model.views import FlatMultipleModelAPIView
from .models import SiteSettings, DefaultNodeSettings
from .serializers import (
    SiteSettingsSerializer,
    NodeSettingsSerializer
)

formatters = {
    "all": {
        "model": DefaultNodeSettings,
        "serializer_class": NodeSettingsSerializer,
        "list": True,
    },
}

# Any modification of base settings is currently being implemented
# in the django admin. The views here simply provide setting detail/lists for
# the client.


class SiteSettingsRetrieve(generics.RetrieveAPIView):
    """ A retrieve API view for the general site settings """

    permission_classes = [permissions.AllowAny]
    authentication_classes = []
    serializer_class = SiteSettingsSerializer

    def get_object(self):
        return SiteSettings.load()


class NodeSettingsList(FlatMultipleModelAPIView):
    """ A list API view for all default node settings """

    permission_classes = [permissions.AllowAny]
    authentication_classes = []
    add_model_type = False

    def get_querylist(self):
        querylist = [
            {
                "queryset": formatter["model"].objects.all(),
                "serializer_class": formatter["serializer_class"],
            }
            for _, formatter in formatters.items()
            if formatter["list"]
        ]
        return querylist
