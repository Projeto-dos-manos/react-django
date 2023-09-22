FROM python:3.8

# Defina variáveis de ambiente para evitar prompts interativos durante a instalação
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE myproject.settings

# Crie um diretório de trabalho dentro do contêiner
WORKDIR /app

RUN pip install Django

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Execute as migrações do banco de dados (substitua "myproject" pelo nome do seu projeto)
RUN python manage.py migrate

# Expõe a porta 8000 para que a aplicação possa ser acessada
EXPOSE 8000

# Comando para iniciar a aplicação quando o contêiner for executado
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
