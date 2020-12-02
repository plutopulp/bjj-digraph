from rest_framework import serializers
from .models import Node, GameNode, MetaNode


class NodeSerializer(serializers.ModelSerializer):
    """ A class to serialize bjj digraph base-nodes """

    id = serializers.UUIDField(required=False)
    graph = serializers.ReadOnlyField(source="graph.id")
    createdAt = serializers.DateTimeField(source="created_at", required=False)
    x = serializers.FloatField(source="position_x", required=False)
    y = serializers.FloatField(source="position_y", required=False)

    class Meta:
        model = Node
        fields = (
            "id",
            "graph",
            "title",
            "createdAt",
            "x",
            "y",
        )


class GameNodeSerializer(NodeSerializer):
    """ A class to serialize bjj digraph game-nodes """

    type = serializers.CharField(source="game_type")
    subtype = serializers.CharField(source="game_subtype")
    description = serializers.CharField(required=False, allow_blank=True)
    comment = serializers.CharField(required=False, allow_blank=True)
    effectiveness = serializers.IntegerField(required=False)
    priority = serializers.IntegerField(required=False)
    proficiency = serializers.IntegerField(required=False)

    class Meta:
        model = GameNode
        fields = (
            "id",
            "graph",
            "title",
            "createdAt",
            "type",
            "subtype",
            "description",
            "comment",
            "effectiveness",
            "priority",
            "proficiency",
            "x",
            "y",
        )


class MetaNodeSerializer(NodeSerializer):
    """ A class to serialize bjj digraph meta-nodes """

    description = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = MetaNode
        fields = (
            "id",
            "graph",
            "title",
            "createdAt",
            "description",
            "x",
            "y",
        )
