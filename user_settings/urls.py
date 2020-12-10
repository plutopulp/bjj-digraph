from django.urls import path

from .views import UserNodeSettingsCreate, UserNodeSettingsDetail, UserNodeSettingsList


urlpatterns = [
    path("", UserNodeSettingsCreate.as_view()),
    path("<uuid:node_settings_id>/", UserNodeSettingsDetail.as_view()),
    path("list/", UserNodeSettingsList.as_view()),
]
