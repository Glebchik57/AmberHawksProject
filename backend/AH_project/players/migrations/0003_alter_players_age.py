# Generated by Django 3.2 on 2023-10-21 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0002_auto_20230927_2221'),
    ]

    operations = [
        migrations.AlterField(
            model_name='players',
            name='age',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
