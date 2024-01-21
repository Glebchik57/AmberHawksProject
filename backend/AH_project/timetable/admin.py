from django.contrib import admin

from .models import Timetable


class TimetableAdmin(admin.ModelAdmin):
    list_display = ('day', 'location', 'time', 'publeshed',)


admin.site.register(Timetable, TimetableAdmin)
