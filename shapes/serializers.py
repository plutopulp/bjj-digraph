from rest_framework import serializers
from .models import NodeShape, GameNodeShape, MetaNodeShape


class NodeShapeSerializer(serializers.ModelSerializer):
    """ A class to serialize node shapes """

    id = serializers.UUIDField(required=False)
    owner = serializers.ReadOnlyField(source="owner.id")
    shapeId = serializers.CharField(source="shape_id")
    fill = serializers.CharField()
    stroke = serializers.CharField()
    strokeWidth = serializers.CharField(source="stroke_width")

    class Meta:
        model = NodeShape
        fields = (
            "id",
            "owner",
            "shapeId",
            "fill",
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


class GameNodeShapeSerializer(NodeShapeSerializer):
    """ A class to serialize game-node shapes """

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
            "stroke",
            "strokeWidth",
        )

    def validate(self, data):
        return self.validate_shape(data, field_names=["game_type", "game_subtype"])


class MetaNodeShapeSerializer(NodeShapeSerializer):
    """ A class to serialize meta-node shapes """

    metaType = serializers.CharField(source="meta_type")

    class Meta:
        model = MetaNodeShape
        fields = (
            "id",
            "owner",
            "metaType",
            "shapeId",
            "fill",
            "stroke",
            "strokeWidth",
        )

    def validate(self, data):
        return self.validate_shape(data, field_names=["meta_type"])
