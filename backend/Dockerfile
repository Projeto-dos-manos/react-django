FROM python:3.8

ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE myproject.settings

WORKDIR /app

RUN pip install Django

COPY . .

RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
