from django.db import models


class Teams(models.Model):
    name = models.CharField('Назване', max_length=50)
    label = models.ImageField(unique=True)

    def __str__(self):
        return f'{self.first_name}'

    class Meta:
        ordering = ['name']
        verbose_name = 'Команда'
        verbose_name_plural = 'Команды'
