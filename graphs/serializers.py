from rest_framework import serializers

from .models import Graph
from accounts.models import CustomUser


class GraphSerializer(serializers.ModelSerializer):
    """ A class to serialize bjj digraphs """

    id = serializers.UUIDField()
    description = serializers.CharField(required=False, allow_blank=True)
    createdAt = serializers.DateTimeField(source="created_at", required=False)

    class Meta:
        model = Graph
        fields = (
            "id",
            "title",
            "description",
            "createdAt",
            "owner",
        )
