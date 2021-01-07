from rest_framework import serializers

from settings.models import AbstractBaseNodeSettings
from settings.serializers import BaseNodeSettingsSerializer
from .models import UserGameNodeSettings, UserMetaNodeSettings
from utils.serializers import ReadWriteSerializerMethodField
from utils.strings import camelcase_to_underscore


class BaseUserNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A base class to serialize user node settings """

    owner = serializers.ReadOnlyField(source="owner.id")

    class Meta:
        model = AbstractBaseNodeSettings
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


class UserGameNodeSettingsSerializer(BaseUserNodeSettingsSerializer):
    """ A class to serialize a user's game-node settings """

    nodeType = ReadWriteSerializerMethodField()

    class Meta:
        model = UserGameNodeSettings
        fields = BaseUserNodeSettingsSerializer.Meta.fields

    def get_nodeType(self, obj):
        return {"type": "game", "subtype": (obj.game_type, obj.game_subtype)}


class UserMetaNodeSettingsSerializer(BaseUserNodeSettingsSerializer):
    """ A class to serialize a user's meta-node settings """

    nodeType = ReadWriteSerializerMethodField()

    class Meta:
        model = UserMetaNodeSettings
        fields = BaseUserNodeSettingsSerializer.Meta.fields

    def get_nodeType(self, obj):
        return {"type": "meta", "subtype": (obj.meta_type,)}
