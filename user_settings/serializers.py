from rest_framework import serializers
from settings.models import AbstractBaseNodeSettings
from .models import UserGameNodeSettings, UserMetaNodeSettings


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

    def validate_shape(self, data, field_names):
        """Method for child subclasses to ensure user and specific shape type
        are unique together. Would usually do this in the model but the unique together
        fields are spread across multi-tables"""
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


class GameNodeShapeSerializer(BaseNodeSettingsSerializer):
    """ A class to serialize a user's game-node settings """

    owner = serializers.ReadOnlyField(source="owner.id")
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
            "opacity",
            "stroke",
            "strokeWidth",
        )

#    def validate(self, data):
#        return self.validate_shape(data, field_names=["game_type", "game_subtype"])


class MetaNodeSettingsSerializer(BaseNodeSettingsSerializer):
    """ A class to serialize a user's meta-node settings """

    owner = serializers.ReadOnlyField(source="owner.id")
    metaType = serializers.CharField(source="meta_type")

    class Meta:
        model = MetaNodeShape
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

#    def validate(self, data):
#        return self.validate_shape(data, field_names=["meta_type"])
