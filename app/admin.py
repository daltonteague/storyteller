from django.contrib import admin
from .models import User, World, Book, Chapter

class UserSerializer(admin.ModelAdmin):
    model = User
    fields = ('username', 'email', 'password', 'profile_pic',
                        'bio', 'join_date')

class WorldSerializer(admin.ModelAdmin):
    model = World
    fields = ('name', 'cover', 'user')

class BookSerializer(admin.ModelAdmin):
    model = Book
    fields = ('title', 'cover', 'user', 'world')

class ChapterSerializer(admin.ModelAdmin):
    model = Chapter
    fields = ('title', 'body', 'image', 'user', 'world', 'book')

admin.site.register(User, UserSerializer)
admin.site.register(World, WorldSerializer)
admin.site.register(Book, BookSerializer)
admin.site.register(Chapter, ChapterSerializer)