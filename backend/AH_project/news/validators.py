import datetime as dt

from django import forms


def validate_colon(value):
    if ' : ' not in value:
        raise forms.ValidationError(
            'счет должен содержать ":" окруженное пробелами',
        )


def validate_date(value):
    if value < dt.date.today():
        raise forms.ValidationError(
            'Дата должна быть не раньше сегодняшнего дня'
        )
