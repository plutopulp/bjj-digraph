import uuid
from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator
from model_utils.managers import InheritanceManager

from graphs.models import Graph

NODE_TYPES = (
    ("position", "position"),
    ("submission", "submission"),
    ("entry", "entry"),
    ("transition", "transition"),
    ("sweep", "sweep"),
    ("takedown", "takedown"),
    ("guardPull", "guardPull"),
    ("guardPass", "guardPass"),
)
NODE_SUBTYPES = (("user", "user"), ("opponent", "opponent"))
gameNodeValidators = [MinValueValidator(-100), MaxValueValidator(100)]


class Node(models.Model):
    """ A base class for all bjj digraph nodes """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    graph = models.ForeignKey(
        Graph, on_delete=models.CASCADE, related_name="base_nodes"
    )
    title = models.CharField(max_length=200, default="")
    created_at = models.DateTimeField(default=timezone.now)
    position_x = models.FloatField(default=100)
    position_y = models.FloatField(default=100)

    objects = InheritanceManager()

    def __str__(self):
        return self.title


class GameNode(Node):
    """ A class to represent bjj game-related digraph nodes """

    game_type = models.CharField(choices=NODE_TYPES, default="", max_length=50)
    game_subtype = models.CharField(
        choices=NODE_SUBTYPES, default="user", max_length=50
    )
    description = models.TextField(default="", blank=True)
    comment = models.TextField(default="", blank=True)
    effectiveness = models.IntegerField(default=0, validators=gameNodeValidators)
    priority = models.IntegerField(default=0, validators=gameNodeValidators)
    proficiency = models.IntegerField(default=0, validators=gameNodeValidators)

    class Meta:
        verbose_name = "Game Node"
        verbose_name_plural = "Game Nodes"


class MetaNode(Node):
    """ A class to represent bjj digraph meta-nodes, e.g. comments, texts etc.."""

    description = models.TextField(default="", blank=True)

    class Meta:
        verbose_name = "Meta Node"
        verbose_name_plural = "Meta Nodes"
