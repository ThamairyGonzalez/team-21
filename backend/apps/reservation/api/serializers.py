from rest_framework import serializers

from ..models import Service, ReservationService, ReservationRoom

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('id', 'title', 'description', 'price')