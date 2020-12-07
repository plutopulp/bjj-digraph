from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import (
    Settings,
    SiteSettings,
    NodesSettings,
    GameNodeSettings,
    MetaNodeSettings,
)
from .config import GAME_NODES_SETTINGS, META_NODES_SETTINGS
from graphs.models import Graph


def create_settings_module(SettingsModel, settings_instance):
    settings_module = SettingsModel.objects.create()
    settings_module.settings = settings_instance
    settings_module.save()


def create_nodes_settings(NodeSettingsModel, default_settings, settings_instance):
    for node_setting in default_settings:
        NodeSettingsModel.objects.create(
            **node_setting, nodes_settings=settings_instance
        ).save()


@receiver(post_save, sender=Settings)
def create_sub_settings(sender, instance, created, **kwargs):
    """Generate all sub settings when the top-most Settings instance
    is created"""
    if created:
        create_settings_module(SiteSettings, instance)
        create_settings_module(NodesSettings, instance)


@receiver(post_save, sender=NodesSettings)
def create_node_settings(sender, instance, created, **kwargs):
    """Generate all individual node settings when NodesSettings instance
    is created"""
    if created:
        create_nodes_settings(GameNodeSettings, GAME_NODES_SETTINGS, instance)
        create_nodes_settings(MetaNodeSettings, META_NODES_SETTINGS, instance)
