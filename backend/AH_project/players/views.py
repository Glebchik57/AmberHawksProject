from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny

from .models import Players
from .serializers import PlayerSerializer


class PlayersViewSet(viewsets.ModelViewSet):
    queryset = Players.objects.all()
    serializer_class = PlayerSerializer
    permission_classes = (AllowAny,)
