from django.db import models
from apps.abstracts.models import AbstractModel


class Client(AbstractModel):
    is_company = models.BooleanField(default=False)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True,)
    zip_code = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.email

class IndividualClient(AbstractModel):
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'
    
class CompanyClient(AbstractModel):
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    manager = models.CharField(max_length=50)
    address  = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return f'{self.name} {self.manager}'