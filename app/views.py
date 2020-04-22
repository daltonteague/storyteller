from .models import User, World, Book, Chapter
from .serializers import UserSerializer, WorldSerializer, BookSerializer, ChapterSerializer
from rest_framework import viewsets

class UserListCreate(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class UserListEdit(generics.ListCreateAPIView):
#     queryset = User.get
    
class WorldListCreate(viewsets.ModelViewSet):
    queryset = World.objects.all()
    serializer_class = WorldSerializer

class BookListCreate(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class ChapterListCreate(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

