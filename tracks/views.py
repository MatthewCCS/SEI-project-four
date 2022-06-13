from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status

from .models import Track
from .serializers.common import TrackSerializer
from .serializers.populated import PoplulatedTrackSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly
# Create your views here.

class TrackListView(APIView):
  permission_classes = (IsAuthenticatedOrReadOnly, )

  def get(self, _request):
    tracks = Track.objects.all()
    serialized_tracks = TrackSerializer(tracks, many=True)
    return Response(serialized_tracks.data, status=status.HTTP_200_OK)

class TrackDetailView(APIView):

  def get_track(self, pk):
    try:
      return Track.objects.get(pk=pk)
    except Track.DoesNotExist as e:
      raise NotFound({ 'detail': str(e)})
#get
  def get(self, _request, pk):
    track = self.get_track(pk)
    serialized_track = PoplulatedTrackSerializer(track)
    return Response(serialized_track.data, status.HTTP_200_OK)
#put
  def put(self, request, pk):
    track_to_update = self.get_album(pk)
    deserialized_track = TrackSerializer(track_to_update, request.data)
    try:
      deserialized_track.is_valid()
      deserialized_track.save()
      return Response(deserialized_track.data, status.HTTP_202_ACCEPTED)
    except Exception as e:
      return Response({ 'detail': str(e)}, status.HTTP_422_UNPROCESSABLE_ENTITY)

#delete
  def delete(self, _request, pk):
    track_to_delete = self.get_track(pk)
    track_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)