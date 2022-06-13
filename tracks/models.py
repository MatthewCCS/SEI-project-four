from typing_extensions import Required
from django.db import models

# Create your models here.

class Track(models.Model):
  title = models.CharField(max_length=50, default=None)
  trackUrl = models.CharField(max_length=300, default=None)
  artist = models.ForeignKey('artists.Artist', related_name='artist_track' ,on_delete=models.CASCADE)
  album = models.ForeignKey('albums.Album', null=True, blank=True, on_delete=models.CASCADE)
  genre = models.ManyToManyField('genres.Genre', related_name='albums')
  duration = models.PositiveIntegerField(default=None, null=True, blank=True)

  def __str__(self, ):
        return f"{self.title} - {self.artist} - {[self.name for self in self.genre.all()]}"
