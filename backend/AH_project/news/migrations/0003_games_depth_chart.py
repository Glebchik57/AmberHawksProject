# Generated by Django 3.2 on 2023-09-27 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0002_auto_20230927_2221'),
        ('news', '0002_remove_games_depth_chart'),
    ]

    operations = [
        migrations.AddField(
            model_name='games',
            name='depth_chart',
            field=models.ManyToManyField(blank=True, null=True, to='players.Players'),
        ),
    ]
