from django.db import models


class Contact(models.Model):
    """ A class to model contact messages """

    name = models.CharField(max_length=128)
    email = models.EmailField(max_length=256)
    subject = models.CharField(max_length=256, default="")
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"

    def __str__(self):
        return f"{self.name} - {self.subject}: {self.message[:100]}"
