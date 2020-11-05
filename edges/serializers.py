from rest_framework import serializers
from .models import Edge


class EdgeSerializer(serializers.ModelSerializer):
    sourceNode = serializers.IntegerField(source="source_node.id")
    targetNode = serializers.IntegerField(source="target_node.id")
    rationale = serializers.TimeField(required=False, allow_blank=True)

    class Meta:
        model = Edge
        fields = (
            "id",
            "sourceNode",
            "targetNode",
            "rationale",
        )
