import uuid
from django.db import models
from nodes.models import Node
from graphs.models import Graph


class Edge(models.Model):
    """ A class to represent the edges of a bjj digraph """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    graph = models.ForeignKey(Graph, on_delete=models.CASCADE, related_name="edges")
    source_node = models.ForeignKey(
        Node, on_delete=models.CASCADE, related_name="output_edges"
    )
    target_node = models.ForeignKey(
        Node, on_delete=models.CASCADE, related_name="input_edges"
    )
    # The rationale behind transitioning between nodes
    rationale = models.TextField(default="", blank=True)

    class Meta:
        verbose_name = "Edge"
        verbose_name_plural = "Edges"

    def __str__(self):
        return f"{self.source_node.title} - {self.target_node.title}"
