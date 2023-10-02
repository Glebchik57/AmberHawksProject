# Generated by Django 4.0 on 2023-08-31 19:12

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=50, verbose_name='Фамилия')),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, unique=True)),
                ('team', models.CharField(choices=[('Amber Hawks', 'Янтарные Ястребы'), ('Amber Kids', 'Детская команда'), ('Amber Knight', 'Янтарный рыцарь'), ('women ff team', 'женская команда')], max_length=50)),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Обратная связь',
                'verbose_name_plural': 'Обратная связь',
            },
        ),
    ]
