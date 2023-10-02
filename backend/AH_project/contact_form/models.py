from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from players.models import TEAM_CHOICES


class Contact(models.Model):
    first_name = models.CharField('Имя', max_length=50)
    last_name = models.CharField('Фамилия', max_length=50)
    phone_number = PhoneNumberField(unique=True)
    team = models.CharField(choices=TEAM_CHOICES, max_length=50)
    pub_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'
