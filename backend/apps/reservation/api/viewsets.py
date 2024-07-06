from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from .serializers import ServiceSerializer, ReservationRoomSerializer, ReservationServiceSerializer
from ..models import Service, ReservationRoom, ReservationService

class ServiceViewSet(ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.active_objects.all()
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class ReservationRoomViewSet(ModelViewSet):
    serializer_class = ReservationRoomSerializer
    queryset = ReservationRoom.active_objects.all()
    
    def perform_create(self, serializer):
        
        room = serializer.validated_data['room_id']
        room.status = 'R'
        room.save()
        serializer.save()
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

class ReservationServiceViewSet(ModelViewSet):
    serializer_class = ReservationServiceSerializer
    queryset = ReservationService.active_objects.all()
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)