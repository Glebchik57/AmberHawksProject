import datetime

from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from drf_extra_fields.fields import Base64ImageField

from news.models import Events, News, Games
from players.serializers import PlayerSerializer


class EventSerializer(serializers.ModelSerializer):
    image = Base64ImageField()

    class Meta:
        model = Events
        fields = (
            'title',
            'text',
            'image',
            'date',
        )


class NewsSerializer(serializers.ModelSerializer):
    image = Base64ImageField()
    pub_date = serializers.SerializerMethodField()

    class Meta:
        model = News
        fields = (
            'title',
            'text',
            'image',
            'pub_date',
        )
        validators = [
            UniqueTogetherValidator(
                queryset=News.objects.all(),
                fields=('title', 'text'),
                message='Кажется новсть уже существует'
            )
        ]

    def get_pub_date(self, obj):
        return datetime.date.today()


class GameSerializer(serializers.ModelSerializer):
    image = Base64ImageField()
    depth_chart = PlayerSerializer(many=True)

    class Meta:
        model = Games
        fields = (
            'title',
            'text',
            'image',
            'date',
            'depth_chart',
            'score',
        )
