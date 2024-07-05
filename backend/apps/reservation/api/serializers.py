from rest_framework import serializers
from datetime import datetime

from ..models import Service, ReservationService, ReservationRoom

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'title', 'description', 'price')
        
class ReservationRoomSerializer(serializers.ModelSerializer):
        
    def validate(self, data):
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        if start_date >= datetime.now():
            if end_date > start_date:
                if self.is_room_available(data['room_id'], start_date, end_date):
                    return data
                else:
                    raise serializers.ValidationError('the room in this date is unavailable')
            else:
                raise serializers.ValidationError('The end date must be after the day of admission')
        else:
            raise serializers.ValidationError('The admission date must be after today')
        
    def is_room_available(self, room, start_date, end_date):
        overlapping_bookings = ReservationRoom.objects.filter(
            room=room,
            start_date__lt=end_date,
            end_date__gt=start_date
        )
        return not overlapping_bookings.exists()
    
    class Meta:
        model = ReservationRoom
        fields = ('_all_')