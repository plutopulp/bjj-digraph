from django.db import models
from colorfield.fields import ColorField
from utils.models import SingletonModel

STROKE = "#333333"
STROKE_WIDTH = 2
USER_OPACITY = 90
OPPONENT_OPACITY = 60


POSITION = {
    "game_type": "position",
    "shape_id": "#square",
    "fill": "#ad560e",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}


class SiteSettings(SingletonModel):
    name = models.CharField(max_length=256, default="BJJ digraph")
    site_url = models.URLField(max_length=256, default="")

    class Meta:
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return "Configuration"


class PositionNodeSettings(models.Model):
    shape_id = models.CharField(max_length=64)
    fill = ColorField(default="#ad560e")
    stroke = ColorField(default=STROKE)
    stroke_width = models.PositiveSmallIntegerField(default=STROKE_WIDTH)


class NodeSettings(SingletonModel):
    position = models.OneToOneField(PositionNodeSettings, on_delete=models.CASCADE)
