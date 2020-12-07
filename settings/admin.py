from django.contrib import admin
from django.db.utils import ProgrammingError

from .models import Settings, SiteSettings, NodesSettings, GameNodeSettings


class SettingsAdminMixin:
    """ A mixin for settings admin classes """

    def initialize(self, AdminClass, SettingsModel, *args, **kwargs):
        """ When Admin is instantiated load and save site settings """
        super(AdminClass, self).__init__(*args, **kwargs)
        # Try-Catch needed for generating db migrations
        try:
            SettingsModel.load().save()
        except ProgrammingError:
            print("Programming error")

    def has_add_permission(self, *args, **kwargs):
        return True

    def has_delete_permission(self, *args, **kwargs):
        return True


class SettingsAdmin(SettingsAdminMixin, admin.ModelAdmin):
    def __init__(self, *args, **kwargs):
        self.initialize(SettingsAdmin, Settings, *args, **kwargs)


class GameNodeSettingsAdmin(admin.ModelAdmin):
    def has_add_permission(self, *args, **kwargs):
        return True

    def has_delete_permission(self, *args, **kwargs):
        return True


admin.site.register(Settings, SettingsAdmin)
admin.site.register(SiteSettings)
admin.site.register(NodesSettings)
admin.site.register(GameNodeSettings, GameNodeSettingsAdmin)
