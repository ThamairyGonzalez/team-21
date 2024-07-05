from rest_framework import serializers

from ..models import Client, IndividualClient, CompanyClient

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'is_company', 'email', 'phone', 'zip_code']

class IndividualClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualClient
        fields = ['first_name', 'last_name']

class CompanyClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyClient
        fields = ['name', 'manager', 'address']
        
class CompleteClientSerializer(serializers.ModelSerializer):
    individual = IndividualClientSerializer(required=False)
    company = CompanyClientSerializer(required=False)
    
    class Meta:
        model = Client
        fields = [
            'id',
            'is_company', 
            'email', 
            'phone', 
            'zip_code', 
            'individual', 
            'company'
            ]
        
    def validate(self, data):
        if data['is_company'] and 'company' not in data:
            raise serializers.ValidationError("Company data is required for company clients")
        if not data['is_company'] and 'individual' not in data:
            raise serializers.ValidationError("Individual data is required for company clients")
        return data
        
    def create(self, validate_data):
        
        company_data = validate_data.pop('company', None)
        individual_data = validate_data.pop('individual', None)
        
        client = Client.objects.create(**validate_data)
        response = ClientSerializer(client).data
        if client.is_company:
            company = CompanyClient.objects.create(client_id=client, **company_data)
            response['company'] = CompanyClientSerializer(company).data
            return response
        else:
            individual = IndividualClient.objects.create(client_id=client, **individual_data)
            response['individual'] = IndividualClientSerializer(individual).data
            return response
    def update(self, instance, validate_data):
        
        company_data = validate_data.pop('company', None)
        individual_data = validate_data.pop('individual', None)
        
        Client.objects.filter(id=instance.id).update(**validate_data)
        instance.refresh_from_db()
        
        if instance.is_company:
            if company_data is not None:
                CompanyClient.objects.update_or_create(client_id=instance, defaults=company_data)
            IndividualClient.objects.filter(client_id=instance).delete()
        else:
            if individual_data is not None:
                IndividualClient.objects.update_or_create(client_id=instance, defaults=individual_data)
            CompanyClient.objects.filter(client_id=instance).delete()
        
        return instance
        
        
        
    def to_representation(self, instance):
        if isinstance(instance, dict):
            # Si es un diccionario (resultado de create), lo devolvemos directamente
            return instance
        # Si es una instancia de Client (para GET requests), usamos la representación normal
        representation = super().to_representation(instance)
        
        if instance.is_company:
            company = CompanyClient.objects.get(client_id=instance)
            company_representation = CompanyClientSerializer(company).data
            representation['company'] = company_representation
        else:
            individual = IndividualClient.objects.get(client_id=instance)
            individual_representation = IndividualClientSerializer(individual).data
            representation['individual'] = individual_representation

        return representation 