from rest_framework import viewsets


from players.models import Players
from news.models import Events, News, Games
from documents.models import Documents
from .serializers import (
    PlayerSerializer,
    EventSerializer,
    NewsSerializer,
    GameSerializer,
    DocumentsSerializer
)
from .permissions import ReadOnly


class PlayersViewSet(viewsets.ModelViewSet):
    queryset = Players.objects.all()
    serializer_class = PlayerSerializer
    permission_classes = (ReadOnly,)


class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    permission_classes = (ReadOnly,)


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (ReadOnly,)


class GamesViewSet(viewsets.ModelViewSet):
    queryset = Games.objects.all()
    serializer_class = GameSerializer
    permission_classes = (ReadOnly,)


class DocumentsViewSet(viewsets.ModelViewSet):
    queryset = Documents.objects.all()
    serializer_class = DocumentsSerializer
    permission_classes = (ReadOnly,)
