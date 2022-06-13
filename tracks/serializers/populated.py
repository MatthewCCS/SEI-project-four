from .common import TrackSerializer
from artists.serializers.common import ArtistSerializer

class PoplulatedTrackSerializer(TrackSerializer):
  artist = ArtistSerializer()