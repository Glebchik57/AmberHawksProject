from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Timetable
from .serializers import TimetableSerializer


class TimetableViewSet(viewsets.ModelViewSet):
    queryset = Timetable.objects.all()
    serializer_class = TimetableSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def list(self, queryset):
        queryset = Timetable.objects.filter(publeshed=True)
        serializer = TimetableSerializer(queryset, many=True)
        return Response(serializer.data)
