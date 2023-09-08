from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView
)

from documents.views import DocumentsViewSet
from news.views import EventsViewSet, NewsViewSet, GamesViewSet
from players.views import PlayersViewSet
from contact_form.views import ContactCreate

router = DefaultRouter()

router.register('documents', DocumentsViewSet)
router.register('events', EventsViewSet)
router.register('news', NewsViewSet)
router.register('games', GamesViewSet)
router.register('players', PlayersViewSet)
router.register('contacts', ContactCreate)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path(
        'api/schema/swagger-ui/',
        SpectacularSwaggerView.as_view(url_name='schema'),
        name='swagger-ui'
    ),
    path(
        'api/schema/redoc/',
        SpectacularRedocView.as_view(url_name='schema'),
        name='redoc'
    ),
]
