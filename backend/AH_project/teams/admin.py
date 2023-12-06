from django.contrib import admin

from .models import Teams


class TeamsAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_filter = ('name',)


admin.site.register(Teams, TeamsAdmin)
