from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    """ A class to represent app users """

    def __str__(self):
        return self.username
