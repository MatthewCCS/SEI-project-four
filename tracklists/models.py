from django.db import models

# Create your models here.

class Tracklist(models.Model):
  tracks = models.ForeignKey('tracks.track',  on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.tracks}"
