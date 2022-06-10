from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers.populated import PopulatedArtistSerializer
from .models import Artist

# Endpoint: /genres/
class ArtistListView(APIView):

    def get(self, _request):
        artists = Artist.objects.all()
        serialized_artists = PopulatedArtistSerializer(artists, many=True)
        return Response(serialized_artists.data)