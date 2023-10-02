from django.db import models


class Documents(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField(auto_now_add=True)
    file = models.FileField()

    class Meta:
        ordering = ['pub_date']
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'
