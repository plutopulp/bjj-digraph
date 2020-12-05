from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

from shapes.models import GameNodeShape, MetaNodeShape
from shapes.config import GAME_NODE_SHAPES, META_NODE_SHAPES

User = get_user_model()


@receiver(post_save, sender=User)
def create_node_shapes(sender, instance, created, **kwargs):
    if created:
        for node_shape in GAME_NODE_SHAPES:
            GameNodeShape.objects.create(**node_shape, owner=instance)
        for node_shape in META_NODE_SHAPES:
            MetaNodeShape.objects.create(**node_shape, owner=instance)
