from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from documents.views import DocumentsViewSet
from news.views import EventsViewSet, NewsViewSet, GamesViewSet
from players.views import PlayersViewSet
from contact_form.views import ContactCreate
from teams.views import TeamsViewSet
from timetable.views import TimetableViewSet

router = DefaultRouter()

router.register('documents', DocumentsViewSet)
router.register('events', EventsViewSet)
router.register('news', NewsViewSet)
router.register('games', GamesViewSet)
router.register('players', PlayersViewSet)
router.register('contacts', ContactCreate)
router.register('teams', TeamsViewSet)
router.register('timetable', TimetableViewSet)

schema_view = get_schema_view(
   openapi.Info(
      title="Amber Yawks API",
      default_version='v1',
      description="Докуметация Amber Hawks API",
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path(
        'docs<format>/',
        schema_view.without_ui(cache_timeout=0),
        name='schema-json'
    ),
    path(
        'docs/',
        schema_view.with_ui('swagger', cache_timeout=0),
        name='schema-swagger-ui'
    ),
    path(
        'redoc/',
        schema_view.with_ui('redoc', cache_timeout=0),
        name='schema-redoc'
    ),
]
