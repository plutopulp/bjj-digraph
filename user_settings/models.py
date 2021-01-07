from django.db import models
from django.contrib.auth import get_user_model

from settings.models import AbstractBaseNodeSettings
from .managers import NodeSettingsManager
from settings.nodes.type_choices import (
    GAME_TYPE_CHOICES,
    GAME_SUBTYPE_CHOICES,
    META_TYPE_CHOICES,
)
from main.config.node_types import NODE_TYPES


User = get_user_model()


class UserNodeSettings(AbstractBaseNodeSettings):
    """ A class to model a the svg node settings of a given user """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    node_type = models.CharField(max_length=128, default="", choices=NODE_TYPES)

    objects = NodeSettingsManager()

    class Meta:
        verbose_name = "User Node Settings"
        verbose_name_plural = "User Nodes Settings"
        unique_together = ("owner", "node_type",)


class AbstractBaseUserNodeSettings(AbstractBaseNodeSettings):
    """ An abstract base class to model user node settings """

    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="%(app_label)s_%(class)s_related",
        related_query_name="%(app_label)s_%(class)ss",
    )

    objects = NodeSettingsManager()

    class Meta:
        abstract = True


class UserGameNodeSettings(AbstractBaseUserNodeSettings):
    """ A class to represent a user's game-node config/settings """

    game_type = models.CharField(
        choices=GAME_TYPE_CHOICES, default="position", max_length=50
    )
    game_subtype = models.CharField(
        choices=GAME_SUBTYPE_CHOICES, default="user", max_length=50
    )

    class Meta:
        verbose_name = "User Game Node Settings"
        verbose_name_plural = "User Game Nodes Settings"
        # unique together validation performed on serializer

    def __str__(self):
        return f"User: {self.owner.username} Type: {self.game_type} Subtype: {self.game_subtype}"


class UserMetaNodeSettings(AbstractBaseUserNodeSettings):
    """ A class to represent a user's meta-node config/settings """

    meta_type = models.CharField(
        choices=META_TYPE_CHOICES, default="comment", max_length=50
    )

    class Meta:
        verbose_name = "User Meta Node Settings"
        verbose_name_plural = "User Meta Nodes Settings"

    def __str__(self):
        return f"User: {self.owner.username} Type: {self.meta_type}"
