from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ProductViewSet, ComentarioViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'produtos', ProductViewSet, basename='produtos')
router.register(r'produtos/(?P<produto_id>[0-9]+)/comentarios', ComentarioViewSet, basename='comentarios')

urlpatterns = [
    path('users/', UserViewSet.as_view({'post': 'create_user'}), name='create_user'),
    path('users/login/', UserViewSet.as_view({'post': 'login_user'}), name='login_user'),
    path('produtos/', ProductViewSet.as_view({'post': 'create_product'}), name='create_product'),
    path('produtos/<int:pk>/', ProductViewSet.as_view({'get': 'view_product'}), name='view_product'),
    path('produtos/<int:pk>/delete/', ProductViewSet.as_view({'get': 'delete_product'}), name='delete_product'),
    path('produtos/<int:produto_id>/comentarios/', ComentarioViewSet.as_view({'post': 'create_comentario'}), name='create_comentario'),
]
