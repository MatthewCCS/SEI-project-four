from django.db import models
from django.forms import CharField

# Create your models here.

class Artist(models.Model):
  name = models.CharField(max_length=50, default=None)
  # album = models.ManyToManyField('artists.Artist', related_name='albums')
  # track = models.ManyToOneRel
  info = models.TextField()
