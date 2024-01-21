from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

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


urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='docs'),
]

admin.site.site_header = 'Amber Admin'
admin.site.index_title = 'Панель администратора'
