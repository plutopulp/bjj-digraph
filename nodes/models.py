import uuid
from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator

from .managers import NodeManager
from graphs.models import Graph
from main.config.node_types import NODE_TYPES


SCORE_VALIDATORS = [MinValueValidator(-100), MaxValueValidator(100)]


class Node(models.Model):
    """ A base class to model all bjj digraph nodes """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    node_type = models.CharField(
        choices=NODE_TYPES, default="score-position-user", max_length=128
    )
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


class ScoreNode(Node):
    """ A class to represent bjj score/game-related digraph nodes """

    description = models.TextField(default="", blank=True)
    score = models.IntegerField(default=0, validators=SCORE_VALIDATORS)
    rationale = models.TextField(default="", blank=True)

    class Meta:
        verbose_name = "Score Node"
        verbose_name_plural = "Score Nodes"


class MetaNode(Node):
    """ A class to represent bjj digraph meta-nodes, e.g. comments, texts etc.."""

    description = models.TextField(default="", blank=True)

    class Meta:
        verbose_name = "Meta Node"
        verbose_name_plural = "Meta Nodes"
