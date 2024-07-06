from rest_framework import serializers
from ..models import Quotation, QuotationRoomType
from apps.room.models import RoomType
from apps.client.models import Client, IndividualClient, CompanyClient


class QuotationRoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuotationRoomType
        fields = ['room_type_id', 'quantity']

class QuotationSerializer(serializers.ModelSerializer):
    room_types = QuotationRoomTypeSerializer(many=True, required=False)
    
    class Meta:
        model = Quotation
        fields = ['client_id', 'start_date', 'end_date', 'people', 'payment_method', 'status', 'room_types']