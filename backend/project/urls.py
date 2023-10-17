from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'produtos', ProductViewSet, basename='produtos')

urlpatterns = [
    path('', include(router.urls)),
]
