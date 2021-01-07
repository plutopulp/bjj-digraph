import uuid

from django.db import models
from django.contrib.postgres.fields import ArrayField
from colorfield.fields import ColorField

from utils.models import SingletonModel

from main.config.node_types import NODE_TYPES
from .nodes.type_choices import (
    GAME_TYPE_CHOICES,
    GAME_SUBTYPE_CHOICES,
    META_TYPE_CHOICES,
)
from .nodes.default import COMMON_NODE_PROPS


class Settings(SingletonModel):
    """Top-most parent settings model whose instantiation triggers
    the creation of all sub settings modules through post save signal"""

    class Meta:
        verbose_name = "Settings"
        verbose_name_plural = "Settings"

    def __str__(self):
        return "Settings Configuration"


class SiteSettings(SingletonModel):
    """ A class to model all general site settings """

    settings = models.OneToOneField(
        Settings, on_delete=models.CASCADE, blank=True, null=True
    )
    title = models.CharField(max_length=256, default="BJJ digraph")
    site_url = models.URLField(max_length=256, default="")

    class Meta:
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return "Site Configuration"


class AbstractBaseNodeSettings(models.Model):
    """ An abstract base class to model the svg properties of a node """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    shape_id = models.CharField(max_length=64, default="#square")
    type_text = models.CharField(max_length=64, default="")
    fill = ColorField(default="#ad560e")
    fill_opacity = models.FloatField(default=1.0)
    stroke = ColorField(default=COMMON_NODE_PROPS["stroke"])
    stroke_opacity = models.FloatField(default=1.0)
    stroke_width = models.PositiveSmallIntegerField(
        default=COMMON_NODE_PROPS["stroke_width"]
    )

    class Meta:
        abstract = True

    def __str__(self):
        return self.node_type

class DefaultNodeSettings(AbstractBaseNodeSettings):
    """ A class to model the default settings of a node. When a user is registered,
    user node settings models are instantiated through post save signals which are
    initialised as copied instances of this default model. """

    # settings field not included in AbstractBaseNodeSettings as latter is
    # used in user_settings models. node_type included here for unique_together
    # constraint 
    node_type = models.CharField(max_length=128, default="", choices=NODE_TYPES)
    settings = models.ForeignKey(
        Settings, on_delete=models.CASCADE, blank=True, null=True
    )

    class Meta:
        verbose_name = "Default Node Settings"
        verbose_name_plural = "Default Nodes Settings"
        unique_together = ("settings", "node_type")
