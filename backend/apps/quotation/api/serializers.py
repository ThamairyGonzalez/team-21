from rest_framework import serializers
from ..models import Quotation, QuotationRoomType
from django.db.models import Q
from apps.room.models import RoomType, Room
from apps.client.models import Client, IndividualClient, CompanyClient
from apps.reservation.models import ReservationRoom

class QuotationRoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuotationRoomType
        fields = ['room_type_id', 'quantity']

class QuotationSerializer(serializers.ModelSerializer):
    room_types = QuotationRoomTypeSerializer(many=True, required=False)
    
    class Meta:
        model = Quotation
        fields = ['client_id', 'start_date', 'end_date', 'people', 'payment_method', 'status', 'room_types']

    def create(self, validated_data):
        room_types_data = validated_data.pop('room_types')
        for room in room_types_data:
            room_type_id = room['room_type_id']
            quantity = room['quantity']
            quantity_available = self.is_room_available(room_type_id, validated_data['start_date'], validated_data['end_date'])
            if quantity_available < quantity:
                raise serializers.ValidationError(f'The room {room_type_id.type} there are {quantity_available} avaible, and you need {quantity}')
        
        quotation = Quotation.objects.create(**validated_data)
        
        for room_type_data in room_types_data:
            QuotationRoomType.objects.create(quotation_id=quotation, **room_type_data)
            
        return quotation
    
    def to_representation(self, instance):
        
        representation = super().to_representation(instance)
        
        quotation_room_types = QuotationRoomType.objects.filter(quotation_id=instance)
        quotation_room_types_represtation = QuotationRoomTypeSerializer(quotation_room_types, many=True).data
        representation['quotation_room_types'] = quotation_room_types_represtation

        return representation 
        
    def is_room_available(self, room_type_id, check_in_date, check_out_date):
        
        rooms_of_type = Room.active_objects.filter(room_type_id=room_type_id)
        quantity_room_type = rooms_of_type.count()
        
        overlapping_bookings = ReservationRoom.active_objects.filter(
            Q(room_id__in=rooms_of_type) &
            Q(check_in_date__lt=check_out_date) &
            Q(check_out_date__gt=check_in_date) &
            Q(Q(status = 'A') | Q(status = 'R'))
        ).count()
        
        return quantity_room_type - overlapping_bookings  
