import os

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import action
import requests
from base64 import b64encode
from dotenv import load_dotenv
from django.http import HttpResponse

from .models import Events, News, Games
from .serializers import EventSerializer, NewsSerializer, GameSerializer

load_dotenv()


class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    @action(
        ['GET'],
        detail=False,
        permission_classes=[IsAuthenticatedOrReadOnly],
        url_path='parcer',
    )
    def parcer(self, request):
        VK_TOKEN = os.getenv('VK_TOKEN')
        VK_VERSION = os.getenv('VK_VERSION')
        GROUP_DOMAIN = os.getenv('GROUP_DOMAIN')
        ENDPOINT_VK = 'https://api.vk.com/method/wall.get'
        try:
            posts = requests.get(
                ENDPOINT_VK,
                params={
                    'access_token': VK_TOKEN,
                    'v': VK_VERSION,
                    'domain': GROUP_DOMAIN,
                    'count': 1
                }
            )
            data = posts.json()['response']['items']
        except Exception as error:
            return HttpResponse(f'проблема с подключением к VK. причина {error}', status=500)
        else:
            text = data[0]['text']
            title = f'{" ".join(text.split()[0:3])}'
            try:
                image = requests.get(
                    data[0]['attachments'][0]['photo']['sizes'][8]['url']
                )
            except Exception:
                News.objects.create(title=title, text=text)
            else:
                News.objects.create(title=title, text=text, image=f"{b64encode(image.content).decode()}")
            finally:
                return HttpResponse('успешно')


class GamesViewSet(viewsets.ModelViewSet):
    queryset = Games.objects.all()
    serializer_class = GameSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
