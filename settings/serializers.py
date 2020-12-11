from rest_framework import serializers
from .models import (
    SiteSettings,
    AbstractBaseNodeSettings,
    GameNodeSettings,
    MetaNodeSettings,
)


class SiteSettingsSerializer(serializers.ModelSerializer):
    """ A class to serialize general site settings """

    class Meta:
        model = SiteSettings
        fields = (
            "title",
            "site_url",
        )


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

    nodeType = serializers.SerializerMethodField()

    class Meta:
        model = GameNodeSettings
        fields = ("nodeType",) + BaseNodeSettingsSerializer.Meta.fields

    def get_nodeType(self, obj):
        return f"game-{obj.game_type}-{obj.game_subtype}"

    def update(self, instance, validated_data):
        node_type = validated_data.pop("nodeType")
        type_list = node_type.split("-")
        instance.game_type = type_list[1]
        instance.game_subtype = type_list[2]
        instance.save()


class MetaNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A class to serialize a meta-node settings """

    nodeType = serializers.SerializerMethodField()

    class Meta:
        model = MetaNodeSettings
        fields = ("nodeType",) + BaseNodeSettingsSerializer.Meta.fields

    def get_nodeType(self, obj):
        return f"meta-{obj.meta_type}"

    def update(self, instance, validated_data):
        node_type = validated_data.pop("nodeType")
        type_list = node_type.split("-")
        instance.meta_type = type_list[1]
        instance.save()
