from .models import UserProfile, Produto
from rest_framework import routers, serializers, viewsets


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = [ 'user', 'email', 'password', 'phone']

class UserLoginSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = [ 'email', 'password']


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Produto
        fields = ['codigo_produto', 'nome', 'descricao', 'preco']


