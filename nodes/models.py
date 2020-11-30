import uuid
from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator, MaxValueValidator

from graphs.models import Graph

NODE_TYPES = (
    ("position", "position"),
    ("submission", "submission"),
    ("entry", "entry"),
    ("transition", "transition"),
    ("sweep", "sweep"),
    ("takedown", "takedown"),
    ("guardPull", "guardPull"),
)
NODE_SUBTYPES = (("user", "user"), ("opponent", "opponent"))
gameNodeValidators = [MinValueValidator(-100), MaxValueValidator(100)]


class Node(models.Model):
    """ A class to represent all bjj digraph nodes """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    graph = models.ForeignKey(Graph, on_delete=models.CASCADE, related_name="nodes")
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(default=timezone.now)
    node_type = models.CharField(choices=NODE_TYPES, default="", max_length=50)
    description = models.TextField(default="", blank=True)
    comment = models.TextField(default="", blank=True)
    effectiveness = models.IntegerField(default=50)
    priority = models.IntegerField(default=50)
    proficiency = models.IntegerField(default=50)
    position_x = models.FloatField(default=100)
    position_y = models.FloatField(default=100)

    class Meta:
        verbose_name = "Node"
        verbose_name_plural = "Nodes"

    def __str__(self):
        return self.title


class AbstractBaseNode(models.Model):
    """ An abstract base class for all bjj digraph nodes """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    graph = models.ForeignKey(
        Graph, on_delete=models.CASCADE, related_name="abstract_base_nodes"
    )
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(default=timezone.now)
    position_x = models.FloatField(default=100)
    position_y = models.FloatField(default=100)

    class Meta:
        abstract = True


class GameNode(AbstractBaseNode):
    """ A class to represent bjj game-related digraph nodes """

    node_type = models.CharField(choices=NODE_TYPES, default="", max_length=50)
    node_subtype = models.CharField(
        choices=NODE_SUBTYPES, default="user", max_length=50
    )
    description = models.TextField(default="", blank=True)
    comment = models.TextField(default="", blank=True)
    effectiveness = models.IntegerField(default=0, validators=gameNodeValidators)
    priority = models.IntegerField(default=0, validators=gameNodeValidators)
    proficiency = models.IntegerField(default=0, validators=gameNodeValidators)


class MetaNode(AbstractBaseNode):
    """ A class to represent bjj digraph meta-nodes, e.g. comments, texts etc.."""
    description = models.TextField(default="", blank=True)

