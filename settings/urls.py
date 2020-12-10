from django.urls import path

from .views import SiteSettingsRetrieve, NodeSettingsList

urlpatterns = [
    path("site/", SiteSettingsRetrieve.as_view()),
    path("nodes/", NodeSettingsList.as_view()),
]
