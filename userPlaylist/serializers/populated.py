from .common import UserPlaylistSerializer
from tracks.serializers.common import TrackSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedUserPlaylistSerializer(UserPlaylistSerializer):
    owner = UserSerializer()
    tracks = TrackSerializer(many=True)