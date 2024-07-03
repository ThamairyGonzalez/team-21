from rest_framework.viewsets import ModelViewSet

from .serializers import CompleteClientSerializer
from ..models import Client

class ClientViewSet(ModelViewSet):
    serializer_class = CompleteClientSerializer
    queryset = Client.active_objects.all()