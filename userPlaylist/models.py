from django.db import models

# Create your models here.

class UserPlaylist(models.Model):
  tracks = models.ForeignKey('tracks.track', on_delete=models.CASCADE)