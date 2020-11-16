from rest_framework import serializers

from .models import Graph
from accounts.models import CustomUser


class GraphSerializer(serializers.ModelSerializer):
    """ A class to serialize bjj digraphs """

    # ID Should always be created client-side, allowing required=False for testing with postman
    id = serializers.UUIDField(required=False)
    description = serializers.CharField(required=False, allow_blank=True)
    createdAt = serializers.DateTimeField(source="created_at", required=False)
    owner = serializers.ReadOnlyField(source="owner.id")

    class Meta:
        model = Graph
        fields = (
            "id",
            "title",
            "description",
            "createdAt",
            "owner",
        )
