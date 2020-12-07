from django.db import models
from colorfield.fields import ColorField
from utils.models import SingletonModel
from main.config.nodes import GAME_TYPE_CHOICES, GAME_SUBTYPE_CHOICES, META_TYPE_CHOICES

STROKE = "#333333"
STROKE_WIDTH = 2
USER_OPACITY = 90
OPPONENT_OPACITY = 60


class Settings(SingletonModel):
    """Top-most parent settings model whose instantiation triggers
    the creation of all sub settings modules through post save signals"""

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
    name = models.CharField(max_length=256, default="BJJ digraph")
    site_url = models.URLField(max_length=256, default="")

    class Meta:
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return "Site Configuration"


class NodesSettings(SingletonModel):
    """A parent settings model whose instantiation triggers
    the creation of all child node settings through post save signals"""

    settings = models.OneToOneField(
        Settings, on_delete=models.CASCADE, blank=True, null=True
    )

    class Meta:
        verbose_name = "Nodes Settings"
        verbose_name_plural = "Nodes Settings"

    def __str__(self):
        return "Nodes Configuration"


class BaseNodeSettings(models.Model):
    """ An abstract base model to for node settings """

    nodes_settings = models.ForeignKey(
        NodesSettings, on_delete=models.CASCADE, blank=True, null=True
    )
    shape_id = models.CharField(max_length=64, default="#square")
    fill = ColorField(default="#ad560e")
    opacity = models.PositiveIntegerField(default=USER_OPACITY)
    stroke = ColorField(default=STROKE)
    stroke_width = models.PositiveSmallIntegerField(default=STROKE_WIDTH)

    class Meta:
        abstract = True


class GameNodeSettings(BaseNodeSettings):
    """ A class to represent a game node's settings """
    game_type = models.CharField(
        choices=GAME_TYPE_CHOICES, default="position", max_length=50
    )
    game_subtype = models.CharField(
        choices=GAME_SUBTYPE_CHOICES, default="user", max_length=50
    )

    class Meta:
        verbose_name = "Game Node Settings"
        verbose_name_plural = "Game Nodes Settings"
        unique_together = (
            "game_type",
            "game_subtype",
        )

    def __str__(self):
        return f"{self.game_type} - {self.game_subtype}"


class MetaNodeSettings(BaseNodeSettings):
    """ A class to represent a meta node's settings """
    meta_type = models.CharField(
        choices=META_TYPE_CHOICES, default="text", max_length=50, unique=True
    )

    class Meta:
        verbose_name = "Meta Node Settings"
        verbose_name_plural = "Meta Nodes Settings"

    def __str__(self):
        return self.meta_type
