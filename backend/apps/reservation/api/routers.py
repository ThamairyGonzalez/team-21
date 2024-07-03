from rest_framework import routers
from .viewsets import ServiceViewSet

router = routers.SimpleRouter()
router.register('service', ServiceViewSet)
router.register('reservationservice', )
router.register('reservationroom', )

urlpatterns = router.urls