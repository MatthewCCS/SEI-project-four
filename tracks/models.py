from django.db import models

# Create your models here.

class Track(models.Model):
  title = models.CharField(max_length=50, default=None)
  trackUrl = models.CharField(max_length=300, default=None)
  artist = models.ForeignKey('artists.Artist', )
  album = models.ForeignKey('albums.Album',)
  genre = models.ManyToManyField('genres.Genre', related_name='albums')
  duration = models.PositiveIntegerField(default=None)
