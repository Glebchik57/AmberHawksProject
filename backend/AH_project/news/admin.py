from django.contrib import admin

from .models import Events, News, Games


class EventsAdmin(admin.ModelAdmin):
    search_fields = ('title',)
    list_filter = ('date')


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'text', 'image',)
    search_fields = ('title',)
    list_filter = ('pub_date')


class GamesAdmin(admin.ModelAdmin):
    search_fields = ('title',)
    list_filter = ('pub_date')
    list_filter = ('date')


admin.site.register(Events, EventsAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Games, GamesAdmin)
