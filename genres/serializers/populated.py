from .common import GenreSerializer
from albums.serializers.common import AlbumSerializer

class PopulatedGenreSerializer(GenreSerializer):
    albums_genre = AlbumSerializer(many=True)