from rest_framework import serializers
from .models import NodeShape, GameNodeShape, MetaNodeShape


class NodeShapeSerializer(serializers.ModelSerializer):
    """ A class to serialize node shapes """

    id = serializers.UUIDField(required=False)
    owner = serializers.ReadOnlyField(source="owner.id")
    shapeId = serializers.CharField(source="shape_id")
    fill = serializers.CharField()
    stroke = serializers.CharField()
    strokeWidth = serializers.CharField(source="stroke_width")

    class Meta:
        model = NodeShape
        fields = (
            "id",
            "owner",
            "shapeId",
            "fill",
            "stroke",
            "strokeWidth",
        )


class GameNodeShapeSerializer(NodeShapeSerializer):
    """ A class to serialize game-node shapes """

    gameType = serializers.CharField(source="game_type")
    gameSubtype = serializers.CharField(source="game_subtype")

    class Meta:
        model = GameNodeShape
        fields = (
            "id",
            "owner",
            "gameType",
            "gameSubtype",
            "shapeId",
            "fill",
            "stroke",
            "strokeWidth",
        )


class MetaNodeShapeSerializer(NodeShapeSerializer):
    """ A class to serialize meta-node shapes """

    metaType = serializers.CharField(source="meta_type")

    class Meta:
        model = MetaNodeShape
        fields = (
            "id",
            "owner",
            "metaType",
            "shapeId",
            "fill",
            "stroke",
            "strokeWidth",
        )
