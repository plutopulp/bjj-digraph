from rest_framework import serializers
from settings.models import AbstractBaseNodeSettings
from settings.serializers import BaseNodeSettingsSerializer
from .models import UserGameNodeSettings, UserMetaNodeSettings


class BaseUserNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A base class to serialize user node settings """

    owner = serializers.ReadOnlyField(source="owner.id")

    class Meta:
        model = AbstractBaseNodeSettings
        fields = (
            "id",
            "owner",
            "shapeId",
            "fill",
            "opacity",
            "stroke",
            "strokeWidth",
        )

    def validate_shape(self, data, field_names):
        """Method for child serializer subclasses to ensure user and specific shape type
        are unique together. Would usually do this in the model but the unique together
        fields are spread across models"""
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

    gameType = serializers.CharField(source="game_type")
    gameSubtype = serializers.CharField(source="game_subtype")

    class Meta:
        model = UserGameNodeSettings
        fields = (
            "id",
            "owner",
            "gameType",
            "gameSubtype",
            "shapeId",
            "fill",
            "opacity",
            "stroke",
            "strokeWidth",
        )

    def validate(self, data):
        return self.validate_shape(data, field_names=["game_type", "game_subtype"])


class UserMetaNodeSettingsSerializer(BaseUserNodeSettingsSerializer):
    """ A class to serialize a user's meta-node settings """

    metaType = serializers.CharField(source="meta_type")

    class Meta:
        model = UserMetaNodeSettings
        fields = (
            "id",
            "owner",
            "metaType",
            "shapeId",
            "fill",
            "opacity",
            "stroke",
            "strokeWidth",
        )

    def validate(self, data):
        return self.validate_shape(data, field_names=["meta_type"])
