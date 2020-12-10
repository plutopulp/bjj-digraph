from django.db import models


class NodeSettingsManager(models.Manager):
    def of_user(self, user):
        return self.filter(owner=user)
