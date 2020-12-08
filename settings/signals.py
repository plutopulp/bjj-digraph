from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import (
    Settings,
    SiteSettings,
    GameNodeSettings,
    MetaNodeSettings,
)
from .nodes.base_settings import GAME_NODES_SETTINGS, META_NODES_SETTINGS


def create_nodes_settings(NodeSettingsModel, default_settings, settings_instance):
    for node_setting in default_settings:
        NodeSettingsModel.objects.create(
            **node_setting, settings=settings_instance
        ).save()

def create_site_settings(settings_instance):
    SiteSettings.objects.create(settings=settings_instance).save()

@receiver(post_save, sender=Settings)
def create_sub_settings(sender, instance, created, **kwargs):
    """Generate all sub settings when the top-most Settings instance
    is created"""
    if created:
        create_site_settings(instance)
        create_nodes_settings(GameNodeSettings, GAME_NODES_SETTINGS, instance)
        create_nodes_settings(MetaNodeSettings, META_NODES_SETTINGS, instance)
