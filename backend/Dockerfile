FROM python:3.11

WORKDIR /app

COPY . . 

RUN pip install Django

RUN django-admin startproject myproject .

RUN python manage.py migrate

EXPOSE 7000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
