from django.db import models

DAY__CHOICES = (
    ('ПН', 'ПН',),
    ('ВТ', 'ВТ',),
    ('СР', 'СР',),
    ('ЧТ', 'ЧТ',),
    ('ПТ', 'ПТ',),
    ('СБ', 'СБ',),
    ('ВС', 'ВС',),
)


class Timetable(models.Model):
    day = models.CharField(choices=DAY__CHOICES, unique=True, max_length=10)
    location = models.TextField(max_length=500)
    time = models.TimeField(blank=True, null=True)
    publeshed = models.BooleanField()

    class Meta:
        ordering = ['day']
        verbose_name = 'Расписание'
        verbose_name_plural = 'Расписание'
