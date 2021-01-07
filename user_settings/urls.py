from django.urls import path

from .views import UserNodeSettingsCreate, UserNodeSettingsDetail, UserNodeSettingsList


urlpatterns = [
    path("nodes/", UserNodeSettingsCreate.as_view()),
    path("nodes/<uuid:node_settings_id>/", UserNodeSettingsDetail.as_view()),
    path("nodes/list/", UserNodeSettingsList.as_view()),
]
