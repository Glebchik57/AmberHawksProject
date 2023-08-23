from django.db import models

POSITION_CHOICES = ('QB', 'C', 'G', 'T', 'RB', 'WR',
                    'TE', 'DT', 'DE', 'LB', 'CB', 'S',)
TEAM_CHOICES = ('Amber Hawks', 'Amber Kids', 'Amber Knight', 'women ff team',)


class Players(models.Model):
    first_name = models.CharField('Имя', max_length=50)
    last_name = models.CharField('Имя', max_length=50)
    photo = models.ImageField(blank=True, null=True)
    age = models.PositiveIntegerField()
    bday = models.DateField()
    number = models.PositiveIntegerField(
        unique=True
    )
    position = models.CharField(choices=POSITION_CHOICES)
    team = models.CharField(choices=TEAM_CHOICES)

    def __str__(self):
        return f'{self.position}: {self.first_name} {self.last_name}({self.number})'

    class Meta:
        ordering = ['number']
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'
