from rest_framework import routers, serializers, viewsets
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from .serializers import UserProfileSerializer  # Você precisará criar um arquivo serializers.py com o seu UserSerializer
from .models import UserProfile

class UserViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]  

    @action(detail=False, methods=['post'])
    def create_user(self, request):
        serializer = UserProfileSerializer(data=request.data)

        if request.method == 'POST':
            print('teste')

        if serializer.is_valid():
            email = serializer.validated_data['email']
            if UserProfile.objects.filter(email=email).exists():
                return Response({'error': 'Este usuário já existe'}, status=status.HTTP_400_BAD_REQUEST)
            
            user = serializer.save()
            return Response({'status': 'Usuário criado com sucesso'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

