from django.db import models
from django.contrib.auth import get_user_model

#from main.config.nodes import GAME_TYPE_CHOICES, GAME_SUBTYPE_CHOICES, META_TYPE_CHOICES
from settings.models import GameNodeSettings


User = get_user_model()


class UserGameNodeSettings(GameNodeSettings):
    """ A class to represent a user's game-node config/settings """

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="game_node_settings")

    class Meta:
        verbose_name = "User Game Node Settings"
        verbose_name_plural = "User Game Nodes Settings"
    #    # Unique together validation performed in serializer

    #def __str__(self):
    #    return f"{self.game_type} - {self.game_subtype}"


#class MetaNodeShape(NodeShape):
#    """ A class to represent the svg user config/settings of a meta-type node """
#
#    meta_type = models.CharField(
#        choices=META_TYPE_CHOICES, default="comment", max_length=50
#    )
#
#    class Meta:
#        verbose_name = "Meta Node Shape"
#        verbose_name_plural = "Meta Node Shapes"
#        # Unique together validation performed in serializer
#
#    def __str__(self):
#        return self.meta_type
#