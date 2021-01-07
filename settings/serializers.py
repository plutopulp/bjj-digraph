from rest_framework import serializers

from .models import (
    SiteSettings,
    AbstractBaseNodeSettings,
    GameNodeSettings,
    MetaNodeSettings,
)
from utils.serializers import ReadWriteSerializerMethodField


class SiteSettingsSerializer(serializers.ModelSerializer):
    """ A class to serialize general site settings """

    class Meta:
        model = SiteSettings
        fields = (
            "title",
            "site_url",
        )


class BaseNodeSettingsSerializer(serializers.ModelSerializer):
    """ A base class to serialize node settings """

    id = serializers.UUIDField(required=False)
    shapeId = serializers.CharField(source="shape_id")
    typeText = serializers.CharField(source="type_text")
    svgProps = ReadWriteSerializerMethodField()
    # Child serializers should define their own method
    nodeType = ReadWriteSerializerMethodField()

    class Meta:
        model = AbstractBaseNodeSettings
        fields = (
            "id",
            "nodeType",
            "shapeId",
            "typeText",
            "svgProps",
        )

    def get_svgProps(self, obj):
        return {
            "fill": obj.fill,
            "fillOpacity": obj.fill_opacity,
            "stroke": obj.stroke,
            "strokeOpacity": obj.stroke_opacity,
            "strokeWidth": obj.stroke_width,
        }


class GameNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A class to serialize a game-node settings """

    class Meta:
        model = GameNodeSettings
        fields = BaseNodeSettingsSerializer.Meta.fields

    def get_nodeType(self, obj):
        return {"type": "game", "subtype": (obj.game_type, obj.game_subtype)}
    
class MetaNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A class to serialize a meta-node settings """

    class Meta:
        model = MetaNodeSettings
        fields = BaseNodeSettingsSerializer.Meta.fields

    def get_nodeType(self, obj):
        return {"type": "meta", "subtype": (obj.meta_type,)}