from django.db import models
from django.contrib.auth import get_user_model

from settings.models import AbstractBaseNodeSettings
from .managers import UserNodeSettingsManager
from main.config.node_types import NODE_TYPES


User = get_user_model()


class UserNodeSettings(AbstractBaseNodeSettings):
    """ A class to model a the svg node settings of a given user """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    # node_type not in parent class as unique_together with owner
    node_type = models.CharField(max_length=128, default="", choices=NODE_TYPES)

    objects = UserNodeSettingsManager()

    class Meta:
        verbose_name = "User Node Settings"
        verbose_name_plural = "User Nodes Settings"
        unique_together = (
            "owner",
            "node_type",
        )
