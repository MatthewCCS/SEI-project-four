from .common import TrackSerializer
from albums.serializers.common import AlbumSerializer

class PoplulatedTrackSerializer(TrackSerializer):
  albums = AlbumSerializer(many=True)