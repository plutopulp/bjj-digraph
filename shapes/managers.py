from model_utils.managers import InheritanceManager


class NodeShapeManager(InheritanceManager):
    def of_user(self, user_id):
        return self.filter(owner=user_id)
