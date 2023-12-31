from .models import UserProfile
from rest_framework import routers, serializers, viewsets


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = [ 'email', 'password']
