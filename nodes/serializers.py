from rest_framework import serializers
from .models import Node


class NodeSerializer(serializers.ModelSerializer):
    createdAt = serializers.DateTimeField(source="created_at")
    nodeType = serializers.CharField(source="node_type")
    description = serializers.CharField(required=False, allow_blank=True)
    comment = serializers.CharField(required=False, allow_blank=True)
    effectiveness = serializers.IntegerField(required=False)
    priority = serializers.IntegerField(required=False)
    proficiency = serializers.IntegerField(required=False)

    class Meta:
        model = Node
        fields = (
            "id",
            "title",
            "createdAt",
            "nodeType",
            "description",
            "comment",
            "effectiveness",
            "priority",
            "proficiency",
            "position_x",
            "position_y",
        )
