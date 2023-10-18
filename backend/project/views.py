from rest_framework import routers, serializers, viewsets
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from .serializers import UserProfileSerializer, UserLoginSerializer,ProductSerializer, ComentarioSerializer  # Você precisará criar um arquivo serializers.py com o seu UserSerializer
from .models import UserProfile, Produto

class UserViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]  

    @action(detail=False, methods=['post'])
    def create_user(self, request):
        serializer = UserProfileSerializer(data=request.data)


        if serializer.is_valid():
            email = serializer.validated_data['email']
            
            if UserProfile.objects.filter(email=email).exists():
                return Response({'error': 'Este usuário já existe'}, status=status.HTTP_400_BAD_REQUEST)

            user = serializer.save()
            return Response({'status': 'Usuário criado com sucesso'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'])
    def login_user(self, request):
        serializer = UserLoginSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            if UserProfile.objects.filter(email=email, password=password).exists():
                return Response({'status': 'Usuário entrou com sucesso'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': 'Este usuário não existe'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]  
    queryset = Produto.objects.all()
    serializer_class = ProductSerializer

    @action(detail=False, methods=['post'])
    def create_product(self, request):
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            codigo_produto = serializer.validated_data['codigo_produto']
            
            if Produto.objects.filter(codigo_produto=codigo_produto).exists():
                return Response({'error': 'Este codigo de produto já existe'}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            return Response({'status': 'Produto criado com sucesso'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def view_product(self, request, pk=None):
        try:
            produto = Produto.objects.get(id=pk)
            serializer = ProductSerializer(produto)  
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Produto.DoesNotExist:
            return Response({'error': 'Produto não encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
    def delete_product(self, request, pk=None):
        try:
            produto = Produto.objects.get(id=pk)
            produto.delete()
            return Response({'status': 'Produto deletado com sucesso'}, status=status.HTTP_200_OK)
        except Produto.DoesNotExist:
            return Response({'error': 'Produto não encontrado'}, status=status.HTTP_404_NOT_FOUND)


class ComentarioViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]

    @action(detail=False, methods=['post'])
    def create_comentario(self, request, produto_id):
        try:
            produto = Produto.objects.get(pk=produto_id)
        except Produto.DoesNotExist:
            return Response({'error': 'Produto não encontrado.'}, status=status.HTTP_404_NOT_FOUND)

        serializer = ComentarioSerializer(data=request.data)
        if serializer.is_valid():
            comentario = serializer.save(produto=produto)
            return Response({'status': 'Comentário criado com sucesso', 'comentario_id': comentario.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
