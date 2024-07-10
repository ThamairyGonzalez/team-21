from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from drf_spectacular.types import OpenApiTypes 
from .serializers import RoomStatusSerializer, PhotoSerializer, RoomTypeSerializer, RoomSerializer
from ..models import RoomStatus, RoomPhoto, RoomType, Room


class RoomStatusViewSet(ModelViewSet):
    serializer_class = RoomStatusSerializer
    queryset = RoomStatus.active_objects.all()
    http_method_names = ['get', 'post', 'put', 'delete']
    
    def destroy(self, request, *args, **kwargs):
        
        instance = self.get_object()
        instance.soft_delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)

@extend_schema(
        request={
            'multipart/form-data': {
                'type': 'object',
                'properties': {
                    'room_type_id': {'type': 'string'},
                    'image': {'type': 'string', 'format': 'binary'}
                }
            }
        }
    )    
class PhotoViewSet(ModelViewSet):
    serializer_class = PhotoSerializer
    queryset = RoomPhoto.active_objects.all()
    parser_classes = (MultiPartParser, FormParser)
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