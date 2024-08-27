from django.contrib import admin
from .models import rsvp

class rsvpAmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(rsvp, rsvpAmin)