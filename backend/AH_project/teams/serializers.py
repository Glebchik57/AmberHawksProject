from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField

from .models import Teams


class TeamsSerializer(serializers.ModelSerializer):
    label = Base64ImageField()

    class Meta:
        model = Teams
        fields = (
            'name',
            'label'
        )
