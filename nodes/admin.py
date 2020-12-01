from django.contrib import admin
from .models import Node, GameNode, MetaNode

admin.site.register(Node)
admin.site.register(GameNode)
admin.site.register(MetaNode)
