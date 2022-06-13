from django.db import models

# Create your models here.
class Album(models.Model):
  title = models.CharField(max_length=50, default='Title')
  artist = models.ManyToManyField('artists.Artist', related_name='albums_artist', default='Artist')
  genres = models.ManyToManyField(
      'genres.Genre', 
      related_name='albums_genre', default='Genre'
    )
  tracks = models.ManyToManyField(
    'tracks.Track',
    related_name='albums_tracks', default='Track',
  )
  album_art = models.CharField(max_length=100, default=None, blank=True)

  def __str__(self):
    return f"{self.title} - {[self.name for self in self.artist.all()]} - {[self.name for self in self.genres.all()]}"
