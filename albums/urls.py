from django.urls import path
from .views import AlbumListView, AlbumDetailView

urlpatterns =[
  path('', AlbumListView()),
  path('int:pk/', AlbumDetailView.as_view())
]