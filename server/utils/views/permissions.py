from django.shortcuts import get_object_or_404
from graphs.models import Graph
from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user


class IsGraphOwnerOrReadOnly(permissions.BasePermission):
    """
    Object-level permission to only allow owners of a graph to edit its' objects.
    """

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            graph_id = request.resolver_match.kwargs["graph_id"]
            graph = get_object_or_404(Graph, id=graph_id)
            return graph.owner == request.user

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.graph.owner == request.user
