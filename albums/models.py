from django.db import models

# Create your models here.
class Album(models.Model):
  title = models.CharField(max_length=50, default=None)
  artist = models.ManyToManyField('artists.Artist', related_name='albums_artist')
  genres = models.ManyToManyField(
      'genres.Genre', 
      related_name='albums_genre'
    )
  tracks = models.ForeignKey(
    'tracks.Track',
    related_name='albums_tracks', default=None, on_delete=models.CASCADE
  )
  album_art = models.CharField(max_length=100, default=None)

  def __str__(self):
    return f"{self.title} - {[self.name for self in self.artist.all()]} - {[self.name for self in self.genres.all()]}"
