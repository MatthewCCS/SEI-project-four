from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Tracklist
# from serializers.common import TracklistSerializer
from .serializers.populated import PopulatedTracklistSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly
# Create your views here.

class TracklistListView(APIView):
  permission_classes = (IsAuthenticatedOrReadOnly, )

  def get(self, _request):
    tracklist = Tracklist.objects.all()
    serialized_tracklist = PopulatedTracklistSerializer(tracklist, many=True)
    return Response(serialized_tracklist.data, status=status.HTTP_200_OK)
