from rest_framework import mixins, generics, permissions

from .models import Contact
from .serializers import ContactSerializer

class ContactCreate(mixins.CreateModelMixin, generics.GenericAPIView):
    """ An API view for creating contact messages """

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
