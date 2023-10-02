from rest_framework import serializers

from documents.models import Documents


class DocumentsSerializer(serializers.ModelSerializer):
    pub_date = serializers.SerializerMethodField()

    class Meta:
        model = Documents
        fields = (
            'title',
            'pub_date',
            'file',
        )
