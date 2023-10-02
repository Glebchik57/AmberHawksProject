from django.db import models

from players.models import Players


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
        ordering = ['pub_date']
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Games(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    image = models.ImageField(blank=True, null=True)
    date = models.DateField()
    depth_chart = models.ManyToManyField(
        Players,
        blank=True,
    )
    score = models.CharField(max_length=16, blank=True, null=True)

    def __str__(self):
        return f'{self.title} {self.date}'

    class Meta:
        ordering = ['date']
        verbose_name = 'Игра'
        verbose_name_plural = 'Игры'
