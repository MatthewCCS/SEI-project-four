from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status

from .serializers.common import ArtistSerializer
from .serializers.populated import PopulatedArtistSerializer
from .models import Artist

# Endpoint: /genres/
class ArtistListView(APIView):

  def get(self, _request):
    artists = Artist.objects.all()
    serialized_artists = PopulatedArtistSerializer(artists, many=True)
    return Response(serialized_artists.data)

class ArtistDetailView(APIView):

  def get_artist(self, pk):
    try:
      return Artist.objects.get(pk=pk)
    except Artist.DoesNotExist as e:
      raise NotFound({'detail': str(e)})

  def get(self, _request, pk):
    artist = self.get_artist(pk)
    serialized_artist = PopulatedArtistSerializer(artist)
    return Response(serialized_artist.data, status.HTTP_200_OK)