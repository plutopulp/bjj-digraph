import uuid
from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator
from model_utils import Choices

from .managers import NodeManager
from graphs.models import Graph
from main.config.nodes import GAME_TYPE_CHOICES, GAME_SUBTYPE_CHOICES, META_TYPE_CHOICES


GAME_NODE_VALIDATORS = [MinValueValidator(-100), MaxValueValidator(100)]


class Node(models.Model):
    """ A base class to model all bjj digraph nodes """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    graph = models.ForeignKey(
        Graph, on_delete=models.CASCADE, related_name="base_nodes"
    )
    title = models.CharField(max_length=200, default="")
    created_at = models.DateTimeField(default=timezone.now)
    position_x = models.FloatField(default=100)
    position_y = models.FloatField(default=100)

    objects = NodeManager()

    def __str__(self):
        return self.title


class GameNode(Node):
    """ A class to represent bjj game-related digraph nodes """

    game_type = models.CharField(
        choices=GAME_TYPE_CHOICES, default="position", max_length=50
    )
    game_subtype = models.CharField(
        choices=GAME_SUBTYPE_CHOICES, default="user", max_length=50
    )
    description = models.TextField(default="", blank=True)
    comment = models.TextField(default="", blank=True)
    effectiveness = models.IntegerField(default=0, validators=GAME_NODE_VALIDATORS)
    priority = models.IntegerField(default=0, validators=GAME_NODE_VALIDATORS)
    proficiency = models.IntegerField(default=0, validators=GAME_NODE_VALIDATORS)

    class Meta:
        verbose_name = "Game Node"
        verbose_name_plural = "Game Nodes"


class MetaNode(Node):
    """ A class to represent bjj digraph meta-nodes, e.g. comments, texts etc.."""

    meta_type = models.CharField(
        choices=META_TYPE_CHOICES, default="comment", max_length=50
    )
    description = models.TextField(default="", blank=True)

    class Meta:
        verbose_name = "Meta Node"
        verbose_name_plural = "Meta Nodes"
