from django.db import models


class Teams(models.Model):
    name = models.CharField('Назване', max_length=50, unique=True)
    label = models.ImageField()

    def __str__(self):
        return f'{self.name}'

    class Meta:
        ordering = ['name']
        verbose_name = 'Команда'
        verbose_name_plural = 'Команды'
