from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied, ValidationError
from rest_framework import status

#import serializers
from .models import UserPlaylist
from .serializers.common import UserPlaylistSerializer
from .serializers.populated import PopulatedUserPlaylistSerializer


from rest_framework.permissions import IsAuthenticated

# Create your views here.
# UserPlaylistAllView, UserPlaylistDetailview
#get all 
class UserPlaylistAllView(APIView):
  permission_classes = (IsAuthenticated, )
#get
  def get(self, _request):
    playlist = UserPlaylist.objects.all()
    serialized_playlist = UserPlaylistSerializer(playlist, many=True)
    return Response(serialized_playlist.data, status=status.HTTP_200_OK)
#post
  def post(self, request):
    request.data['owner'] = request.user.id
    playlist_to_add = UserPlaylistSerializer(data=request.data)
    try:
      playlist_to_add.is_valid(True)
      playlist_to_add.save()
      return Response(playlist_to_add.data, status.HTTP_201_CREATED)
    except ValidationError:
      return Response(playlist_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
    except Exception as e:
      print(type(e))
      print(e)
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)


class UserPlaylistDetailview(APIView):

  def get_playlist(self, pk):
    try:
      return UserPlaylist.objects.get(pk=pk)
    except UserPlaylist.DoesNotExist as e:
      raise NotFound({ 'detail': str(e)})
#get
  def get(self, _request, pk):
    playlist = self.get_playlist(pk)
    serialized_playlist = PopulatedUserPlaylistSerializer(playlist)
    return Response(serialized_playlist.data, status.HTTP_200_OK)
#put
  def put(self, request, pk):
    playlist_to_update = self.get_playlist(pk)
    deserialized_playlist = UserPlaylistSerializer(playlist_to_update, request.data)
    try:
      deserialized_playlist.is_valid()
      deserialized_playlist.save()
      return Response(deserialized_playlist.data, status.HTTP_202_ACCEPTED)
    except Exception as e:
      return Response({ 'detail': str(e)}, status.HTTP_422_UNPROCESSABLE_ENTITY)

#delete
  def delete(self, _request, pk):
    playlist_to_delete = self.get_playlist(pk)
    playlist_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)