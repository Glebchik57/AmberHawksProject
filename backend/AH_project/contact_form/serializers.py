import os

from rest_framework import serializers
import telegram
from dotenv import load_dotenv

from .models import Contact

load_dotenv()


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = (
            'first_name',
            'last_name',
            'phone_number',
            'team',
        )

    def create(self, validated_data):
        name = self.validated_data["first_name"]
        last_name = self.validated_data["last_name"]
        team = self.validated_data["team"]
        p_n = self.validated_data["phone_number"]
        massage = f'{last_name} {name} хочет попасть в {team}. позвони ему {p_n}'
        bot = telegram.Bot(token=os.getenv('TG_TOKEN'))
        try:
            bot.send_message(os.getenv('TG_ID'), massage)
        except Exception as error:
            return error
        return Contact.objects.create(**validated_data)
