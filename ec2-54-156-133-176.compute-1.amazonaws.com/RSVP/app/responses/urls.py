from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'rsvp', views.rsvpView)

urlpatterns = [
    path('', include(router.urls)),
    path('create/', views.createRSVPView.as_view(), name='rsvp-create'),
]
