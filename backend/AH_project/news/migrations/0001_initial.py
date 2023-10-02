# Generated by Django 4.0 on 2023-08-31 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('players', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('date', models.DateField()),
            ],
            options={
                'verbose_name': 'Событие',
                'verbose_name_plural': 'События',
                'ordering': ['date'],
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
                'ordering': ['pub_date'],
            },
        ),
        migrations.CreateModel(
            name='Games',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('date', models.DateField()),
                ('score', models.CharField(blank=True, max_length=16, null=True)),
                ('depth_chart', models.ManyToManyField(blank=True, null=True, to='players.Players')),
            ],
            options={
                'verbose_name': 'Игра',
                'verbose_name_plural': 'Игры',
                'ordering': ['date'],
            },
        ),
    ]
