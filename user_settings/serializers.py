from rest_framework import serializers

from settings.serializers import DefaultNodeSettingsSerializer
from .models import UserNodeSettings
from utils.strings import camelcase_to_underscore


class UserNodeSettingsSerializer(DefaultNodeSettingsSerializer):
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
