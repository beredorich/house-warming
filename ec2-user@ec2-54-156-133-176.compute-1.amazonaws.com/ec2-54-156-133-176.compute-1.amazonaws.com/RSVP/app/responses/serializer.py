from rest_framework import serializers
from .models import rsvp

class rsvpSerializer(serializers.ModelSerializer):
    class Meta:
        model = rsvp
        fields = ['id','name']

class createRsvpSerializer(serializers.ModelSerializer):
    class Meta:
        model = rsvp
        fields = ('name')
