from .common import AlbumSerializer
from genres.serializers.common import GenreSerializer
from tracks.serializers.common import TrackSerializer
from artists.serializers.common import ArtistSerializer

class PopulatedAlbumSerializer(AlbumSerializer):
  genres = GenreSerializer(many=True)
  tracks = TrackSerializer(many=True)
  artist = ArtistSerializer(many=True)

