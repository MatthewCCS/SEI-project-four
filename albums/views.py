from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status

#custom import
from .models import Album
from .serializers.common import AlbumSerializer
from .serializers.populated import PopulatedAlbumSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.
#get all albums
class AlbumListView(APIView):
  permission_classes = (IsAuthenticatedOrReadOnly, )
#get
  def get(self, _request):
    albums = Album.objects.all()
    serialized_albums = AlbumSerializer(albums, many=True)
    return Response(serialized_albums.data, status=status.HTTP_200_OK)
#post
  def post(self, request):
    deserialized_album = AlbumSerializer(data=request.data)
    try:
      deserialized_album.is_valid()
      deserialized_album.save()
      return Response(deserialized_album.data, status.HTTP_201_CREATED)
    except Exception as e:
      print(type(e))
      print(e)
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)


class AlbumDetailView(APIView):

  def get_album(self, pk):
    try:
      return Album.objects.get(pk=pk)
    except Album.DoesNotExist as e:
      raise NotFound({ 'detail': str(e)})
#get
  def get(self, _request, pk):
    album = self.get_album(pk)
    serialized_album = PopulatedAlbumSerializer(album)
    return Response(serialized_album.data, status.HTTP_200_OK)
#put
  def put(self, request, pk):
    album_to_update = self.get_album(pk)
    deserialized_album = AlbumSerializer(album_to_update, request.data)
    try:
      deserialized_album.is_valid()
      deserialized_album.save()
      return Response(deserialized_album.data, status.HTTP_202_ACCEPTED)
    except Exception as e:
      return Response({ 'detail': str(e)}, status.HTTP_422_UNPROCESSABLE_ENTITY)

#delete
  def delete(self, _request, pk):
    album_to_delete = self.get_album(pk)
    album_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)