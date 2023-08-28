from rest_framework import serializers

from .models import Contact


class ContactSerializer(serializers.ModelSerializer):

    class Metd:
        model = Contact
        fields = (
            'first_name',
            'last_name',
            'phone_number',
            'team',
        )
