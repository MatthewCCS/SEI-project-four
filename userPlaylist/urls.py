from django.urls import path
from .views import UserPlaylistAllView, UserPlaylistDetailview

urlpatterns = [ 
  path('', UserPlaylistAllView.as_view()),
  path('<int:pk>', UserPlaylistDetailview.as_view())
]