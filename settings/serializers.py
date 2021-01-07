from rest_framework import serializers

from .models import (
    SiteSettings,
    AbstractBaseNodeSettings,
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


class NodeSettingsSerializer(serializers.ModelSerializer):
    """ A class to serialize node settings """

    id = serializers.UUIDField(required=False)
    shapeId = serializers.CharField(source="shape_id")
    nodeType = serializers.CharField(source="node_type")
    typeText = serializers.CharField(source="type_text")
    svgProps = ReadWriteSerializerMethodField()

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
