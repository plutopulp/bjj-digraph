from django.contrib import admin

from .models import (
    Settings,
    SiteSettings,
    GameNodeSettings,
    MetaNodeSettings,
)

from .forms import SiteSettingsChangeForm, NodeSettingsChangeForm


class NoAddNoDeleteMixin:
    """ A mixin for admin classes which removes add and delete permissions """

    def has_add_permission(self, *args, **kwargs):
        return False

    def has_delete_permission(self, *args, **kwargs):
        return False


class SiteSettingsAdmin(NoAddNoDeleteMixin, admin.ModelAdmin):
    model = SiteSettings
    form = SiteSettingsChangeForm


class GameNodeSettingsAdmin(NoAddNoDeleteMixin, admin.ModelAdmin):
    model = GameNodeSettings
    form = NodeSettingsChangeForm


class MetaNodeSettingsAdmin(NoAddNoDeleteMixin, admin.ModelAdmin):
    model = MetaNodeSettings
    form = NodeSettingsChangeForm


admin.site.register(Settings)
admin.site.register(SiteSettings, SiteSettingsAdmin)
admin.site.register(GameNodeSettings, GameNodeSettingsAdmin)
admin.site.register(MetaNodeSettings, MetaNodeSettingsAdmin)
