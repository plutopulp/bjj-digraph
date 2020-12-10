from django.db import models


class SingletonModel(models.Model):
    """ An abstract base class to instantiate django singleton models """

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        """ Delete any previously existing instances """
        self.__class__.objects.exclude(id=self.id).delete()
        super(SingletonModel, self).save(*args, **kwargs)

    @classmethod
    def load(cls):
        """Load object from the database or instantiate and return a new
        default instance without saving to the database"""
        try:
            return cls.objects.get()
        except cls.DoesNotExist:
            return cls()
