from django.contrib import admin

from .models import Documents


class DocimentsAdmin(admin.ModelAdmin):
    list_display = ('title', 'file',)
    search_fields = ('title',)
    list_filter = ('pub_date')


admin.site.register(Documents, DocimentsAdmin)
