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

    def validate_subtypes(self, data, field_names):
        """Validate method for child serializer subclasses to ensure user and
        specific subtypes are unique together.
        Would usually do this directly in the model but the unique together
        fields are spread across models. Currently not implemented as only shape and svg
        fields are updated, but may be useful in future for updating node types."""

        user = self.context["request"].user
        fields = {field_name: data[field_name] for field_name in field_names}
        model = self.Meta.model
        try:
            obj = model.objects.of_user(user).get(**fields)
        except model.DoesNotExist:
            return data
        if self.instance and obj.id == self.instance.id:
            return data
        else:
            raise serializers.ValidationError(
                "User already has a node shape of this type"
            )