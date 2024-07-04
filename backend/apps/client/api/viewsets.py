from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from .serializers import CompleteClientSerializer
from ..models import Client, CompanyClient, IndividualClient

class ClientViewSet(ModelViewSet):
    serializer_class = CompleteClientSerializer
    queryset = Client.active_objects.all()
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        print(instance)
        if instance.is_company:
            company = CompanyClient.objects.filter(client_id=instance).first()
            company.soft_delete()
        else:
            individual = IndividualClient.objects.filter(client_id=instance).first()
            individual.soft_delete()
        instance.soft_delete()
        return Response(status=status.HTTP_204_NO_CONTENT)