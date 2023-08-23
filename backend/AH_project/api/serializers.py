import datetime

from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField

from players.models import Players
from news.models import Events, News, Games
from documents.models import Documents
from contact_form.models import Contact


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

    def get_pub_date(self):
        return datetime.now()


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


class DocumentsSerializer(serializers.ModelSerializer):
    pub_date = serializers.SerializerMethodField()

    class Meta:
        model = Documents
        fields = (
            'title',
            'pub_date',
            'file',
        )

    def get_pub_date(self):
        return datetime.now()
