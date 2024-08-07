from django.shortcuts import render
from rest_framework import viewsets
from .models import Response
from .serializer import ResponseSerializer

class ResponseView(viewsets.ModelViewSet):
    serializer_class = ResponseSerializer
    queryset = Response.objects.all()

    