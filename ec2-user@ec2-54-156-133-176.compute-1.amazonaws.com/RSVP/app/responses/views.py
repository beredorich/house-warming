from django.shortcuts import render
from rest_framework import viewsets, status
from .models import rsvp
from .serializer import rsvpSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class rsvpView(viewsets.ModelViewSet):
    queryset = rsvp.objects.all()
    serializer_class = rsvpSerializer

class createRSVPView(APIView):
    def post(self,request):
        name = request.data.get('name')
        if name:
            rsvp.objects.create(name=name)
            return Response({'name':name}, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    

