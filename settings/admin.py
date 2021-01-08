from django.contrib import admin

from .models import (
    Settings,
    SiteSettings,
    DefaultNodeSettings,
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


class DefaultNodeSettingsAdmin(NoAddNoDeleteMixin, admin.ModelAdmin):
    model = DefaultNodeSettings
    form = NodeSettingsChangeForm


admin.site.register(Settings)
admin.site.register(DefaultNodeSettings, DefaultNodeSettingsAdmin)
admin.site.register(SiteSettings, SiteSettingsAdmin)
