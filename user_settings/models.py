from django.db import models
from django.contrib.auth import get_user_model

from settings.models import AbstractBaseNodeSettings
from settings.nodes.type_choices import GAME_TYPE_CHOICES, GAME_SUBTYPE_CHOICES, META_TYPE_CHOICES


User = get_user_model()


class UserGameNodeSettings(AbstractBaseNodeSettings):
    """ A class to represent a user's game-node config/settings """
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="game_nodes_settings")
    game_type = models.CharField(
        choices=GAME_TYPE_CHOICES, default="position", max_length=50
    )
    game_subtype = models.CharField(
        choices=GAME_SUBTYPE_CHOICES, default="user", max_length=50
    )

    class Meta:
        verbose_name = "User Game Node Settings"
        verbose_name_plural = "User Game Nodes Settings"
        # todo: unique_together owner and game_types
        # issue with duplicate key violation

    def __str__(self):
        return f"User: {self.owner.username} Type: {self.game_type} Subtype: {self.game_subtype}"


class UserMetaNodeSettings(AbstractBaseNodeSettings):
    """ A class to represent a user's meta-node config/settings """
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="meta_nodes_settings")
    meta_type = models.CharField(
        choices=META_TYPE_CHOICES, default="comment", max_length=50
    )

    class Meta:
        verbose_name = "User Meta Node Settings"
        verbose_name_plural = "User Meta Nodes Settings"

    def __str__(self):
        return f"User: {self.owner.username} Type: {self.meta_type}"
