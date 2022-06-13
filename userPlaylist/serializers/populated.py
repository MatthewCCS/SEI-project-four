from .common import UserPlaylistSerializer
from tracks.serializers.common import TrackSerializer

class PopulatedUserPlaylistSerializer(UserPlaylistSerializer):
    tracks = TrackSerializer(many=True)