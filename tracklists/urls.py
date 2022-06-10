from django.urls import path
from .views import TracklistListView

urlpatterns =[ 
  path('', TracklistListView.as_view())
]