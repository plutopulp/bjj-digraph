from model_utils.managers import InheritanceManager


class NodeManager(InheritanceManager):
    def of_graph(self, graph_id):
        return self.filter(graph=graph_id)
