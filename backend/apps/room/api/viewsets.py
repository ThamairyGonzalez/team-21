from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response

from .serializers import RoomStatusSerializer, PhotoSerializer, RoomTypeSerializer, RoomSerializer
from ..models import RoomStatus, Photo, RoomType, Room

class RoomStatusViewSet(ModelViewSet):
    serializer_class = RoomStatusSerializer
    queryset = RoomStatus.active_objects.all()
    http_method_names = ['get', 'post', 'put', 'delete']
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class PhotoViewSet(ModelViewSet):
    serializer_class = PhotoSerializer
    queryset = Photo.active_objects.all()
    http_method_names = ['get', 'post', 'delete']
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class RoomTypeViewSet(ModelViewSet):
    serializer_class = RoomTypeSerializer
    queryset = RoomType.active_objects.all()
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

class RoomViewSet(ModelViewSet):
    serializer_class = RoomSerializer
    queryset = Room.active_objects.all()
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)