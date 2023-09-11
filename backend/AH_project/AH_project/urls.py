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


_urlpatterns = [
    path('', include(router.urls)),  # todo: добавь prefix /api
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    # todo: Название файла должно выглядеть /openapi.yaml (или .json) но файл сгенерирован форматом yaml
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
    # todo: тут желательно ui docs без /api/schema
]

# todo: Формат url должны иметь почти все через /api за исключением /admin
# todo: Или без /api, этой задачей будет заниматься nginx, но будет прикол с url /api/admin

# todo: Имя swagger должно быть а не swagger-ui
# todo: Думаю добавить /docs для любимого редактора


# todo: примерно так хорошо выглядит префиксы сервис
urlpatterns = [
    path('api/', include(router.urls)),  # todo: добавь prefix /api
    path('admin/', admin.site.urls),
    path(
        'api/openapi.yaml',
        SpectacularAPIView.as_view(),
        name='schema'
    ),
    path(
        'docs/',
        SpectacularSwaggerView.as_view(url_name='schema'),
        name='swagger-ui'
    ),
    path(
        'swagger/',
        SpectacularSwaggerView.as_view(url_name='schema'),
        name='swagger-ui'
    ),
    path(
        'redoc/',
        SpectacularRedocView.as_view(url_name='schema'),
        name='redoc'
    ),
]
