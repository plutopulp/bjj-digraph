from django.db import models

class PublicGraphManager(models.Manager):
    """ A manager for all publicly available graphs """
    def get_queryset(self):
        return super().get_queryset().filter(public=True)