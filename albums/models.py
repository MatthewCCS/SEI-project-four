from operator import mod
from django.db import models

# Create your models here.
class Album(models.Model):
  title = models.CharField(max_length=50, default=None)
  artist = models.ManyToManyField('artist.Artist', related_name='albums')
  genres = models.ManyToManyField(
      'genres.Genre', 
      related_name='albums'
    )
  tracks = models.ManyToOneRel(
    'tracks.Track',
    related_name='albums'
  )
  album_art = models.CharField(max_length=100, default=None)


