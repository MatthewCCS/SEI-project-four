from .common import TracklistSerializer
from tracks.serializers.common import TrackSerializer

class PopulatedTracklistSerializer(TracklistSerializer):
    tracks = TrackSerializer()