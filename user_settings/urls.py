from django.urls import path

from .views import NodeSettingsCreate, NodeSettingsDetail, NodeSettingsList


urlpatterns = [
    path("", NodeSettingsCreate.as_view()),
    path("<uuid:node_settings_id>/", NodeSettingsDetail.as_view()),
    path("list/", NodeSettingsList.as_view()),
]
