from rest_framework import serializers

from ..models import Client, IndividualClient, CompanyClient

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
        
class CompleteClientSerializer(serializers.ModelSerializer):
    individual = IndividualClientSerializer(required=False)
    company = CompanyClientSerializer(required=False)
    
    class Meta:
        model = Client
        fields = [
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
        print(data)
        return data
        
    def create(self, validate_data):
        
        company_data = validate_data.pop('company', None)
        individual_data = validate_data.pop('individual', None)
        
        client = Client.objects.create(**validate_data)
        
        if client.is_company:
            CompanyClient.objects.create(client_id=client, **company_data)
        else:
            IndividualClient.objects.create(client_id=client, **individual_data)
        
        return client
    
    """ def to_representation(self, instance):
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

        return representation """