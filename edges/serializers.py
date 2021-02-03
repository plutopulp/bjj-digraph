import time

from rest_framework import serializers
from django.shortcuts import get_object_or_404

from .models import Edge
from nodes.models import Node


class EdgeSerializer(serializers.ModelSerializer):
    """A class to serialize bjj digraph edges. Create and update methods
    are included to handle edge's source and target nodes"""

    id = serializers.UUIDField(required=False)
    graph = serializers.ReadOnlyField(source="graph.id")
    source = serializers.UUIDField(source="source_node.id")
    target = serializers.UUIDField(source="target_node.id")
    rationale = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Edge
        fields = (
            "id",
            "graph",
            "source",
            "target",
            "rationale",
        )

    def get_edge_node(self, name, validated_data):
        """ Returns either an edge's source or target node """
        node_id = validated_data.pop(name)["id"]
        return get_object_or_404(Node, id=node_id)

    def get_edge_nodes(self, validated_data):
        """ Returns an edge's source and target node """
        return {
            "source": self.get_edge_node("source_node", validated_data),
            "target": self.get_edge_node("target_node", validated_data),
        }

    def create(self, validated_data):
        """ Creates an edge with appropriate source and target nodes """
        # When user copy pastes multiple nodes with edges
        # nodes need to be created first, so pause. A hack
        # solution for now
        time.sleep(0.25)
        nodes = self.get_edge_nodes(validated_data)
        edge = Edge.objects.create(
            **validated_data, source_node=nodes["source"], target_node=nodes["target"]
        )
        return edge

    def update(self, instance, validated_data):
        """ Updates any/all of the properties of an edge """
        new_nodes = self.get_edge_nodes(validated_data)  # Pop off the node props
        for prop, value in validated_data.items():  # cycle through remaining edge props
            setattr(instance, prop, value)
        instance.source_node = new_nodes["source"]
        instance.target_node = new_nodes["target"]
        instance.save()
        return instance
