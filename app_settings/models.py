from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator

from graphs.models import Graph 

gameNodeValidators = [MinValueValidator(-100), MaxValueValidator(100)]

NODE_TYPES = (
    ("position", "position"),
    ("submission", "submission"),
    ("entry", "entry"),
    ("transition", "transition"),
    ("sweep", "sweep"),
    ("takedown", "takedown"),
    ("guardPull", "guardPull")
)

class GraphConfig(models.Model):
    """ A class to represent the config/settings of a graph set by a user """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200, default="", unique=True)
    description = models.TextField(default="", blank=True)
    graph = models.OneToOneField(Graph, on_delete=models.CASCADE)


class GameNodeType(models.Model):
    """ A class to represent the type properties of a game node """
    garph_config = models.ForeignKey()
    node_type = models.CharField(choices=NODE_TYPES, default="", max_length=50)
    effectiveness = models.IntegerField(default=0, validators=gameNodeValidators])
    priority = models.IntegerField(default=0, validators=gameNodeValidators])
    proficiency = models.IntegerField(default=0, validators=gameNodeValidators])
    comment = models.TextField(default="", blank=True)
    description = models.TextField(default="", blank=True)