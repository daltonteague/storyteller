from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user', views.UserListCreate, 'user')
router.register(r'world', views.WorldListCreate, 'world')
router.register(r'book', views.BookListCreate, 'book')
router.register(r'chapter', views.ChapterListCreate, 'chapter')

urlpatterns = [
    path('api/', include(router.urls) ),
]