from rest_framework.viewsets import ModelViewSet
from .serializers import RoomStatusSerializer, PhotoSerializer, RoomTypeSerializer, RoomSerializer
from ..models import RoomStatus, Photo, RoomType, Room

class RoomStatusViewSet(ModelViewSet):
    serializer_class = RoomStatusSerializer
    queryset = RoomStatus.active_objects.all()
    http_method_names = ['get', 'post', 'put', 'delete']
    
class PhotoViewSet(ModelViewSet):
    serializer_class = PhotoSerializer
    queryset = Photo.active_objects.all()
    http_method_names = ['get', 'post', 'delete']
    
class RoomTypeViewSet(ModelViewSet):
    serializer_class = RoomTypeSerializer
    queryset = RoomType.active_objects.all()

class RoomViewSet(ModelViewSet):
    serializer_class = RoomSerializer
    queryset = Room.active_objects.all()