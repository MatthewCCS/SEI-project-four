from rest_framework.serializers import ModelSerializer
from ..models import UserPlaylist

class UserPlaylistSerializer(ModelSerializer):
    class Meta:
        model = UserPlaylist
        fields = '__all__'