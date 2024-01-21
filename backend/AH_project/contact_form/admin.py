from django.contrib import admin

from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_filter = ('team', 'processed',)


admin.site.register(Contact, ContactAdmin)
