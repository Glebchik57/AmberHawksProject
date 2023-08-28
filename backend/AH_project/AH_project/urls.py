from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from documents.views import DocumentsViewSet
from news.views import EventsViewSet, NewsViewSet, GamesViewSet
from players.views import PlayersViewSet
from contact_form.views import ContactCreateVeiwset


router = DefaultRouter()

router.register('documents', DocumentsViewSet)
router.register('events', EventsViewSet)
router.register('news', NewsViewSet)
router.register('games', GamesViewSet)
router.register('players', PlayersViewSet)
router.register('contacts', ContactCreateVeiwset)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
