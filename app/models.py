from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    profile_pic = models.ImageField(upload_to="images/user")
    bio = models.CharField(max_length=300)
    join_date = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title

class World(models.Model):
    name = models.CharField(max_length=100)
    cover = models.ImageField(upload_to="images/world")
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
    )

    def _str_(self):
        return self.title

class Book(models.Model):
    title = models.CharField(max_length=100)
    cover = models.ImageField(upload_to="images/book")
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
    )
    world = models.ForeignKey(
        'World',
        on_delete=models.CASCADE,
    )

    def _str_(self):
        return self.title

class Chapter(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField(max_length=None)
    image = models.ImageField(upload_to="images/chapter")
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
    )
    world = models.ForeignKey(
        'World',
        on_delete=models.CASCADE,
    )
    book = models.ForeignKey(
        'Book',
        on_delete=models.CASCADE,
    )

    def _str_(self):
        return self.title
