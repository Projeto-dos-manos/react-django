# Generated by Django 4.2 on 2023-10-18 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0006_alter_imagem_imagem'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produto',
            name='avaliacoes',
        ),
        migrations.RemoveField(
            model_name='produto',
            name='comentarios',
        ),
        migrations.RemoveField(
            model_name='produto',
            name='imagens',
        ),
        migrations.AddField(
            model_name='produto',
            name='imagem',
            field=models.TextField(default='caminho_para_imagem_padrao.jpg'),
        ),
        migrations.DeleteModel(
            name='Avaliacao',
        ),
        migrations.DeleteModel(
            name='Comentario',
        ),
        migrations.DeleteModel(
            name='Imagem',
        ),
    ]