from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import (
    Settings,
    SiteSettings,
    DefaultNodeSettings,
    GameNodeSettings,
    MetaNodeSettings,
)
from .nodes.default import DEFAULT_NODE_SETTINGS


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
        create_nodes_settings(DefaultNodeSettings, DEFAULT_NODE_SETTINGS, instance)
