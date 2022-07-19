from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from softwareData.models import userDetails, Users


class userDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = userDetails
        fields = ('Id', 'Email', 'userName', 'title', 'SCOST', 'DCOST', 'SOLD')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('Id','userEmail','userPassword','isAdmin','Mobile')