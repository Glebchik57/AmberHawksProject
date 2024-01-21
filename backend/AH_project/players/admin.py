from django.contrib import admin

from .models import Players


class PlayersAdmin(admin.ModelAdmin):
    search_fields = ('last_name',)
    list_filter = ('number',)


admin.site.register(Players, PlayersAdmin)
