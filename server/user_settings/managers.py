from django.db import models


class UserNodeSettingsManager(models.Manager):
    def of_user(self, user):
        return self.filter(owner=user)
