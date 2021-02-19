from django.contrib import admin

from .models import Graph
from .forms import GraphForm

class GraphAdmin(admin.ModelAdmin):
    model = Graph
    form = GraphForm
    list_display = ("title", "description", "owner", "created_at", "public", "slug")    

admin.site.register(Graph, GraphAdmin)
