import os

from django.db import models

from teams.models import Teams
from .validators import validate_colon


class Events(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    image = models.ImageField(blank=True, null=True)
    date = models.DateField()

    def __str__(self):
        return f'{self.title}'

    class Meta:
        ordering = ['date']
        verbose_name = 'Событие'
        verbose_name_plural = 'События'


class News(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    image = models.ImageField(blank=True, null=True)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}'

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['title', 'text'],
                name='unique_news'
            )
        ]
        ordering = ['pub_date']
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Games(models.Model):
    team1 = models.ForeignKey(
        Teams,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='games_team1',
        verbose_name='Хозяева'
    )
    team2 = models.ForeignKey(
        Teams,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        related_name='games_team2',
        verbose_name='Гости'
    )
    adress = models.TextField(max_length=150)
    date = models.DateField()
    score = models.CharField(
        max_length=16,
        default='-:-',
        blank=True,
        null=True,
        validators=[validate_colon],
    )

    def __str__(self):
        return f'{self.title} {self.date}'

    class Meta:
        ordering = ['date']
        verbose_name = 'Игра'
        verbose_name_plural = 'Игры'
