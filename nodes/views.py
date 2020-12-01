from .models import Node, GameNode, MetaNode
from .serializers import NodeSerializer, GameNodeSerializer, MetaNodeSerializer
from main.utils.views.generators import detail_view_generator, list_view_generator


NodeDetailView = detail_view_generator(Node, NodeSerializer, "node_id")
NodeListView = list_view_generator(Node, NodeSerializer)

GameNodeDetailView = detail_view_generator(GameNode, GameNodeSerializer, "node_id")
GameNodeListView = list_view_generator(GameNode, GameNodeSerializer)

MetaNodeDetailView = detail_view_generator(MetaNode, MetaNodeSerializer, "node_id")
MetaNodeListView = list_view_generator(MetaNode, MetaNodeSerializer)
