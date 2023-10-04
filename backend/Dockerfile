FROM python:3.8

ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE myproject.settings

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install mysqlclient

COPY . .


RUN python manage.py makemigrations

RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
