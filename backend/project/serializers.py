from .models import UserProfile, Produto, Comentario, Avaliacao
from rest_framework import routers, serializers, viewsets


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [ 'user', 'email', 'password', 'phone']

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [ 'email', 'password']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'

class ComentarioSerializer(serializers.ModelSerializer):
    produto = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Comentario
        fields = '__all__'


class AvaliacaoSerializer(serializers.ModelSerializer):
    produto = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Avaliacao
        fields = '__all__'