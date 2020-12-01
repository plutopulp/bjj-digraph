from django.contrib import admin
from .models import Node, BaseNode, GameNode, MetaNode

admin.site.register(Node)
admin.site.register(BaseNode)
admin.site.register(GameNode)
admin.site.register(MetaNode)
