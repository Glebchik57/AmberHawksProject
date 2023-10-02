import datetime

from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField

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
        )

    def get_age(self, obj):
        return datetime.today() - obj.bday
