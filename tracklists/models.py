from django.db import models

# Create your models here.

class Tracklist(models.model):
  tracks = models.ForeignKey('tracks.track', )
