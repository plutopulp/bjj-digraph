import uuid

from django.db import models
from django.contrib.auth import get_user_model

from colorfield.fields import ColorField

from .managers import NodeShapeManager
from main.config.nodes import GAME_TYPE_CHOICES, GAME_SUBTYPE_CHOICES, META_TYPE_CHOICES


User = get_user_model()


class NodeShape(models.Model):
    """ A class to represent a user's svg config/settings of a node type """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="node_shapes"
    )
    shape_id = models.CharField(max_length=100, default="#square")
    fill = models.CharField(max_length=20, default="#DDDDDD")
    opacity = models.CharField(max_length=3, default="100")
    stroke = models.CharField(max_length=20, default="#333333")
    stroke_width = models.CharField(max_length=3, default="2")

    objects = NodeShapeManager()


class GameNodeShape(NodeShape):
    """ A class to represent the svg user config/settings of a game-type node """

    game_type = models.CharField(
        choices=GAME_TYPE_CHOICES, default="position", max_length=50
    )
    game_subtype = models.CharField(
        choices=GAME_SUBTYPE_CHOICES, default="user", max_length=50
    )

    class Meta:
        verbose_name = "Game Node Shape"
        verbose_name_plural = "Game Node Shapes"
        # Unique together validation performed in serializer

    def __str__(self):
        return f"{self.game_type} - {self.game_subtype}"


class MetaNodeShape(NodeShape):
    """ A class to represent the svg user config/settings of a meta-type node """

    meta_type = models.CharField(
        choices=META_TYPE_CHOICES, default="comment", max_length=50
    )

    class Meta:
        verbose_name = "Meta Node Shape"
        verbose_name_plural = "Meta Node Shapes"
        # Unique together validation performed in serializer

    def __str__(self):
        return self.meta_type
