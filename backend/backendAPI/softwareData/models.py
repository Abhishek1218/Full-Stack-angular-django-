from django.db import models

# Create your models here.


class Users(models.Model):
    Id = models.AutoField(primary_key=True)
    userEmail = models.CharField(max_length=30)
    userPassword = models.CharField(max_length=30)
    isAdmin = models.BooleanField()
    Mobile = models.BigIntegerField()

class userDetails(models.Model):
    Id = models.AutoField(primary_key=True)
    Email = models.CharField(max_length=30)
    userName = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    SCOST = models.PositiveIntegerField()
    DCOST = models.PositiveIntegerField()
    SOLD = models.PositiveIntegerField()