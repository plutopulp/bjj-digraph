from django.db import models

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

    title = models.CharField(max_length=200)
    node_type = models.CharField(choices=NODE_TYPES, default="")
    description = models.TextField(default="")
    comment = models.TextField(default="")
    effectiveness = models.IntegerField(default=50)
    priority = models.IntegerField(default=50)
    proficiency = models.IntegerField(default=50)
