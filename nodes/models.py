import uuid
from django.db import models
from django.utils import timezone

from graphs.models import Graph

NODE_TYPES = (
    ("position", "position"),
    ("submission", "submission"),
    ("entry", "entry"),
    ("transition", "transition"),
    ("sweep", "sweep"),
    ("conditional", "conditional"),
)


class Node(models.Model):
    """ A class to represent digraph nodes """

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
