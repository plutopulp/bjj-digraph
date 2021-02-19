from django import forms

from .models import Graph

class GraphForm(forms.ModelForm):
    """ A form for creating/editing graphs """

    class Meta:
        model = Graph
        fields = ("title", "description", "owner", "public")

