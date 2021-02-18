from django.contrib import admin
from .models import Contact
from .forms import ContactForm

class ContactAdmin(admin.ModelAdmin):
    model = Contact
    form = ContactForm
    list_display = ("name", "email", "subject", "message", "sent_at")

admin.site.register(Contact, ContactAdmin)
