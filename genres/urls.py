from django.urls import path
from .views import GenreListView

# default for this conf file is: /genres/

urlpatterns = [
    path('', GenreListView.as_view())
]