# Use a imagem base Python 3.11
FROM python:3.11

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

COPY . . 
# Instale o Django
RUN pip install Django

# Crie um novo diretório para o projeto Django (substitua 'myproject' pelo nome desejado)
RUN django-admin startproject myproject .

# Execute as migrações do Django para criar o banco de dados
RUN python manage.py migrate

# Exponha a porta em que a aplicação Django irá rodar (geralmente a porta 8000)
EXPOSE 7000

# Comando para iniciar a aplicação quando o contêiner for executado
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
