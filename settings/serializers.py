from rest_framework import serializers
from .models import AbstractBaseNodeSettings, GameNodeSettings, MetaNodeSettings


class BaseNodeSettingsSerializer(serializers.ModelSerializer):
    """ A class to serialize node settings """

    id = serializers.UUIDField(required=False)
    shapeId = serializers.CharField(source="shape_id")
    fill = serializers.CharField()
    stroke = serializers.CharField()
    strokeWidth = serializers.CharField(source="stroke_width")

    class Meta:
        model = AbstractBaseNodeSettings
        fields = (
            "id",
            "shapeId",
            "fill",
            "opacity",
            "stroke",
            "strokeWidth",
        )


class GameNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A class to serialize a game-node settings """

    gameType = serializers.CharField(source="game_type")
    gameSubtype = serializers.CharField(source="game_subtype")

    class Meta:
        model = GameNodeSettings
        fields = (
            "id",
            "gameType",
            "gameSubtype",
            "shapeId",
            "fill",
            "opacity",
            "stroke",
            "strokeWidth",
        )


class MetaNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A class to serialize a meta-node settings """

    metaType = serializers.CharField(source="meta_type")

    class Meta:
        model = MetaNodeSettings
        fields = (
            "id",
            "metaType",
            "shapeId",
            "fill",
            "opacity",
            "stroke",
            "strokeWidth",
        )
