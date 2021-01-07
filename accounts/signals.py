from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.forms.models import model_to_dict

from settings.models import DefaultNodeSettings
from user_settings.models import UserNodeSettings

User = get_user_model()


def create_single_node_settings(default_settings_obj, UserSettingsModel, user_instance):
    """ Creates a user node settings object with default settings field values """
    default_settings_dict = model_to_dict(default_settings_obj)
    excluded_fields = ("id",)
    user_node_settings = UserSettingsModel.objects.create(owner=user_instance)
    for key, value in default_settings_dict.items():
        if key not in excluded_fields:
            setattr(user_node_settings, key, value)
    user_node_settings.save()


def generate_nodes_settings(DefaultSettingsModel, UserSettingsModel, user_instance):
    """ Creates all user node setting objects of a given node-type settings model """
    default_settings_qs = DefaultSettingsModel.objects.all()
    for settings in default_settings_qs:
        create_single_node_settings(settings, UserSettingsModel, user_instance)


@receiver(post_save, sender=User)
def create_user_settings(sender, instance, created, **kwargs):
    """When a user is created, generate all settings model instances
    which store the user's config/preferences"""
    if created:
        generate_nodes_settings(DefaultNodeSettings, UserNodeSettings, instance)
