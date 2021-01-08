from rest_framework import generics, permissions
from .models import SiteSettings, DefaultNodeSettings
from .serializers import SiteSettingsSerializer, DefaultNodeSettingsSerializer


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


class NodeSettingsList(generics.ListAPIView):
    """ A list API view for the default node settings """

    permission_classes = [permissions.AllowAny]
    authentication_classes = []
    serializer_class = DefaultNodeSettingsSerializer
    queryset = DefaultNodeSettings.objects.all()