from django.contrib import admin
from .models import Response

class ResponseAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(Response, ResponseAdmin)