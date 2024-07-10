from rest_framework.viewsets import ModelViewSet
from .serializers import QuotationSerializer
from ..models import Quotation

class QuotationViewSet(ModelViewSet):
    serializer_class = QuotationSerializer
    queryset = Quotation.active_objects.all()