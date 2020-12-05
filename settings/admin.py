from django.contrib import admin
from django.db.utils import ProgrammingError

from .models import SiteSettings, NodeSettings


class SettingsAdminMixin:
    """ A mixing for settings admin classes """

    def initialize(self, AdminClass, SettingsModel, *args, **kwargs):
        """ When Admin is instantiated load and save site settings """
        super(AdminClass, self).__init__(*args, **kwargs)
        # Try-Catch needed for generating db migrations
        try:
            SettingsModel.load().save()
        except ProgrammingError:
            pass

    # Disable adding new SiteSettings
    def has_add_permission(self, *args, **kwargs):
        return False

    # Disable deleting SiteSettings
    def has_delete_permission(self, *args, **kwargs):
        return False


class SiteSettingsAdmin(SettingsAdminMixin, admin.ModelAdmin):
    def __init__(self, *args, **kwargs):
        self.initialize(SiteSettingsAdmin, SiteSettings, *args, **kwargs)


admin.site.register(SiteSettings, SiteSettingsAdmin)
