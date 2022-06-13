from django.db import models

# Create your models here.

class Artist(models.Model):
  name = models.CharField(max_length=50, default=None)
  album = models.ManyToManyField('albums.Album', related_name='albums_artist')
  # track = models.ForeignKey('tracks.Track', related_name='artist_track',  null=True, blank=True, on_delete=models.CASCADE)
  info = models.TextField()

  def __str__(self):
    return f"{self.name}"