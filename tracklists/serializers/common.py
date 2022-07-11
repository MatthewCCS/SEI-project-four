from rest_framework.serializers import ModelSerializer
from ..models import Tracklist

class TracklistSerializer(ModelSerializer):
    class Meta:
        model = Tracklist
        fields = '__all__'