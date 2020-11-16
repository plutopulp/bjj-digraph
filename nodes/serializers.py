from rest_framework import serializers
from .models import Node


class NodeSerializer(serializers.ModelSerializer):
    """ A class to serialize bjj digraph nodes """

    id = serializers.UUIDField(required=False)
    graph = serializers.ReadOnlyField(source="graph.id")
    createdAt = serializers.DateTimeField(source="created_at", required=False)
    type = serializers.CharField(source="node_type")
    description = serializers.CharField(required=False, allow_blank=True)
    comment = serializers.CharField(required=False, allow_blank=True)
    effectiveness = serializers.IntegerField(required=False)
    priority = serializers.IntegerField(required=False)
    proficiency = serializers.IntegerField(required=False)
    x = serializers.FloatField(source="position_x", required=False)
    y = serializers.FloatField(source="position_y", required=False)

    class Meta:
        model = Node
        fields = (
            "id",
            "graph",
            "title",
            "createdAt",
            "type",
            "description",
            "comment",
            "effectiveness",
            "priority",
            "proficiency",
            "x",
            "y",
        )
