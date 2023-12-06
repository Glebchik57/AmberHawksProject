from django import forms


def validate_colon(value):
    if ' : ' not in value:
        raise forms.ValidationError(
            'счет должен содержать ":" окруженное пробелами',
        )
