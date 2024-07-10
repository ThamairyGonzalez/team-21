from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status, filters

from .serializers import CompleteClientSerializer
from ..models import Client, CompanyClient, IndividualClient
from apps.utils.paginations import CustomPagination

class ClientViewSet(ModelViewSet):
    serializer_class = CompleteClientSerializer
    queryset = Client.active_objects.all()
    http_method_names = ['get', 'post', 'put', 'delete']
    pagination_class = CustomPagination
    
    # Sistema de filtros
    filter_backends = [filters.SearchFilter]
    search_fields = [
                    'email', 
                    'phone', 
                    'zip_code', 
                    'individualclient__first_name',
                    'individualclient__last_name',
                    'companyclient__name',
                    'companyclient__manager'
                    ]
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
       
        if instance.is_company:
            company = CompanyClient.objects.filter(client_id=instance).first()
            company.soft_delete()
        else:
            individual = IndividualClient.objects.filter(client_id=instance).first()
            individual.soft_delete()
        instance.soft_delete()
        return Response(status=status.HTTP_204_NO_CONTENT)