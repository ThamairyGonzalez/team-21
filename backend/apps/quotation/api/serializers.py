from rest_framework import serializers
from ..models import Quotation, QuotationRoomType
from apps.room.models import RoomType
from apps.client.models import Client, IndividualClient, CompanyClient


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['is_company', 'email', 'phone', 'zip_code']

class IndividualClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualClient
        fields = ['first_name', 'last_name']

class CompanyClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyClient
        fields = ['name', 'manager', 'address']

class QuotationRoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuotationRoomType
        fields = ['room_type_id', 'quantity']

class QuotationSerializer(serializers.ModelSerializer):
    room_types = QuotationRoomTypeSerializer(many=True, required=False)

    class Meta:
        model = Quotation
        fields = ['start_date', 'end_date', 'people', 'payment_method', 'status', 'room_types']

class CompleteClientSerializer(serializers.Serializer):
    client = ClientSerializer()
    individual = IndividualClientSerializer(required=False)
    company = CompanyClientSerializer(required=False)
    quotation = QuotationSerializer(required=False)

    def validate(self, data):
        if data['client']['is_company'] and 'company' not in data:
            raise serializers.ValidationError("Company data is required for company clients")
        if not data['client']['is_company'] and 'individual' not in data:
            raise serializers.ValidationError("Individual data is required for individual clients")
        return data

    def create(self, validated_data):
        client_data = validated_data.pop('client')
        client = Client.objects.create(**client_data)

        if client.is_company:
            company_data = validated_data.pop('company')
            CompanyClient.objects.create(client_id=client, **company_data)
        else:
            individual_data = validated_data.pop('individual')
            IndividualClient.objects.create(client_id=client, **individual_data)

        if 'quotation' in validated_data:
            quotation_data = validated_data.pop('quotation')
            room_types_data = quotation_data.pop('room_types', [])
            quotation = Quotation.objects.create(client_id=client, **quotation_data)
            
            for room_type_data in room_types_data:
                QuotationRoomType.objects.create(quotation_id=quotation, **room_type_data)

        return client

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        client_representation = ClientSerializer(instance).data
        representation['client'] = client_representation

        if instance.is_company:
            company = CompanyClient.objects.get(client_id=instance)
            company_representation = CompanyClientSerializer(company).data
            representation['company'] = company_representation
        else:
            individual = IndividualClient.objects.get(client_id=instance)
            individual_representation = IndividualClientSerializer(individual).data
            representation['individual'] = individual_representation

        quotations = Quotation.objects.filter(client_id=instance)
        if quotations.exists():
            quotation = quotations.first()
            quotation_representation = QuotationSerializer(quotation).data
            representation['quotation'] = quotation_representation

        return representation