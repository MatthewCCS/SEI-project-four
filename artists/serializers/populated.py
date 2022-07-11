from .common import ArtistSerializer
from albums.serializers.common import AlbumSerializer

class PopulatedArtistSerializer(ArtistSerializer):
  album = AlbumSerializer(many=True)