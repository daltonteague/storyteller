from rest_framework import serializers
from .models import User, World, Book, Chapter

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'profile_pic',
                        'bio', 'join_date')

class WorldSerializer(serializers.ModelSerializer):
    class Meta:
        model = World
        fields = ('id', 'name', 'cover', 'user')

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'cover', 'user', 'world')

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ('id', 'title', 'body', 'image', 'user', 'world', 'book')