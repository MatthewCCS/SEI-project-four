from rest_framework.serializers import ModelSerializer
from ..models import Track

class TrackSerializer(ModelSerializer):
  class Meta:
    model = Track
    fields = ('title', 'artist', 'album', 'genre', 'duration' )
