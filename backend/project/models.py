from django.db import models


class UserProfile(models.Model):

    user = models.CharField(verbose_name='user', max_length=255, default='Valor Padrão')
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    phone = models.CharField(max_length=200, default='')


    def __str__(self):
        return self.user
    

class Produto(models.Model):
    codigo_produto = models.CharField(max_length=50)
    nome = models.CharField(max_length=200)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    imagem = models.TextField(default='caminho_para_imagem_padrao.jpg')

    def __str__(self):
        return self.nome

class Comentario(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE, related_name='comentarios')
    comentario = models.TextField()

    def __str__(self):
        return self.comentario


class Avaliacao(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE, related_name='avaliacoes')
    avaliacao = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
        return f'Avaliação de {self.produto.nome}: {self.avaliacao}'
