from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.forms.models import model_to_dict

from settings.models import GameNodeSettings, MetaNodeSettings
from user_settings.models import UserGameNodeSettings, UserMetaNodeSettings

User = get_user_model()

excluded_fields = ("id",)

def create_single_node_settings(base_settings_obj, UserSettingsModel, user_instance):
    """ Creates a user node settings object with base settings field values """
    base_settings_dict = model_to_dict(base_settings_obj)
    user_node_settings = UserSettingsModel.objects.create(owner=user_instance)
    for key, value in base_settings_dict.items():
        if key not in excluded_fields:
            setattr(user_node_settings, key, value)
    user_node_settings.save()


def create_nodes_settings(BaseSettingsModel, UserSettingsModel, user_instance):
    """ Creates all user node setting objects of a given node-type settings model """
    base_settings_qs = BaseSettingsModel.objects.all()
    for settings in base_settings_qs:
        create_single_node_settings(settings, UserSettingsModel, user_instance)
        

@receiver(post_save, sender=User)
def create_user_settings(sender, instance, created, **kwargs):
    """ When a user is created, generate all settings model instances 
    which store the user's config/preferences """
    if created:
        create_nodes_settings(GameNodeSettings, UserGameNodeSettings, instance)
        create_nodes_settings(MetaNodeSettings, UserMetaNodeSettings, instance)
