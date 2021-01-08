from rest_framework import serializers

from settings.models import AbstractBaseNodeSettings
from settings.serializers import NodeSettingsSerializer
from .models import UserGameNodeSettings, UserMetaNodeSettings, UserNodeSettings
from utils.serializers import ReadWriteSerializerMethodField
from utils.strings import camelcase_to_underscore


class UserNodeSettingsSerializer(NodeSettingsSerializer):
    """ A base class to serialize user node settings """

    owner = serializers.ReadOnlyField(source="owner.id")

    class Meta:
        model = UserNodeSettings
        fields = (
            "id",
            "nodeType",
            "owner",
            "shapeId",
            "svgProps",
        )

    def update(self, instance, validated_data):
        """ Possible update fields are svgProps and shapeId """

        instance.shape_id = validated_data["shape_id"]
        for svg_key, svg_value in validated_data["svgProps"].items():
            setattr(instance, camelcase_to_underscore(svg_key), svg_value)
        instance.save()
        return instance