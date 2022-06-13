from django.db import models

# Create your models here.

class UserPlaylist(models.Model):
  name = models.CharField(max_length=30, default='new playlist')
  owner = models.ForeignKey('jwt_auth.User', related_name='owner', on_delete=models.CASCADE)
  tracks = models.ManyToManyField('tracks.track', blank=True)