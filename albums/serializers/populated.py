from .common import AlbumSerializer
from genres.serializers.common import GenreSerializer
from tracks.serializers.common import TracksSerializer
from artists.serializers.common import ArtistSerializer

class PopulatedAlbumSerializer(AlbumSerializer):
  genres = GenreSerializer(many=True)
  tracks = TracksSerializer(many=True)
  artist = ArtistSerializer(many=True)

