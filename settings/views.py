from drf_multiple_model.views import FlatMultipleModelAPIView
from .models import GameNodeSettings, MetaNodeSettings
from .serializers import GameNodeSettingsSerializer, MetaNodeSettingsSerializer

formatters = {
    "gameNode": {
        "model": GameNodeSettings,
        "serializer_class": GameNodeSettingsSerializer,
        "list": True,
    },
    "metaNode": {
        "model": MetaNodeSettings,
        "serializer_class": MetaNodeSettingsSerializer,
        "list": True,
    },
}


class NodeSettingsList(FlatMultipleModelAPIView):
    """ A list API view for all base node settings """

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
