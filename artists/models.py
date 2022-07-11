from django.db import models

# Create your models here.

class Artist(models.Model):
  name = models.CharField(max_length=50, default=None)
  album = models.ManyToManyField('albums.Album', related_name='albums_artist', blank=True)
  track = models.ManyToManyField('tracks.Track', related_name='artist_track', blank=True)
  info = models.TextField(blank=True)

  def __str__(self):
    return f"{self.name}"