from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver

from .models import Settings, NodesSettings, GameNodeSettings, SiteSettings
from utils.models import SingletonModel
from .config import POSITION, GAME_NODE_SETTINGS
from graphs.models import Graph

# @receiver(post_save, sender=NodeSettings)
# def generate_settings(sender, instance, created, **kwargs):
#    obj, created = GameNodeSettings.objects.update_or_create(game_type="position", game_subtype="user", defaults=POSITION)
#    instance.position = obj
#    print(instance.position)
#


def create_settings_module(ModuleModel, settings_instance):
    settings_module = ModuleModel.objects.create()
    settings_module.settings = settings_instance
    settings_module.save()


def create_game_node_settings():
    pass


@receiver(post_save, sender=Settings)
def create_sub_settings(sender, instance, created, **kwargs):
    if created:
        create_settings_module(SiteSettings, instance)
        create_settings_module(NodesSettings, instance)


@receiver(post_save, sender=NodesSettings)
def create_node_settings(sender, instance, created, **kwargs):
    if created:
        for node_setting in GAME_NODE_SETTINGS:
            GameNodeSettings.objects.create(
                **node_setting, nodes_settings=instance
            ).save()
