from django.db import models


class UserProfile(models.Model):

    user = models.CharField(verbose_name='user', max_length=255)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    phone = models.CharField(max_length=200, default='')


    def __str__(self):
        return self.user


