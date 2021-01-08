from django.urls import path

from .views import UserNodeSettingsDetail, UserNodeSettingsList


urlpatterns = [
    path("nodes/<uuid:node_settings_id>/", UserNodeSettingsDetail.as_view()),
    path("nodes/", UserNodeSettingsList.as_view()),
]
