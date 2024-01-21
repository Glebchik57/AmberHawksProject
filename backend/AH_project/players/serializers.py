import datetime

from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from dateutil.relativedelta import relativedelta

from .models import Players


class PlayerSerializer(serializers.ModelSerializer):
    photo = Base64ImageField()
    age = serializers.SerializerMethodField()

    class Meta:
        model = Players
        fields = (
            'first_name',
            'last_name',
            'photo',
            'age',
            'number',
            'position',
            'bday'
        )

    def get_age(self, obj):
        return relativedelta(datetime.date.today(), obj.bday).years
