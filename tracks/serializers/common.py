from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from ..models import Track

class TrackSerializer(ModelSerializer):
  class Meta:
    model = Track
    fields = ('id', 'title', 'artist', 'album', 'genre', 'duration', 'trackUrl' )
    optional_fields = ['album', 'duration']

  def to_representation(self, instance):
    rep = super(TrackSerializer, self).to_representation(instance)
    rep['artist'] = instance.artist.name
    return rep
