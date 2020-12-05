from django.contrib import admin

from .models import NodeShape, GameNodeShape, MetaNodeShape

admin.site.register([NodeShape, GameNodeShape, MetaNodeShape])
