from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from softwareData.models import userDetails, Users
from softwareData.serializers import userDetailsSerializer, UsersSerializer


# Create your views here.
@csrf_exempt
def userDetailsApi(request,id = 0):
    if request.method == 'GET':
        userdetails = userDetails.objects.all()
        userdetails_serializer = userDetailsSerializer(userdetails,many = True)
        return JsonResponse(userdetails_serializer.data, safe = False)

    elif request.method == 'POST':
        userDetails_data = JSONParser().parse(request)
        userdetails_serializer = userDetailsSerializer(data= userDetails_data)
        if userdetails_serializer.is_valid():
            userdetails_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failed to Add", safe = False)

    elif request.method == 'PUT':
        userDetails_data = JSONParser().parse(request)
        userDetail = userDetails.objects.get(Id = userDetails_data['Id'])
        userdetails_serializer = userDetailsSerializer(userDetail,data = userDetails_data)
        if userdetails_serializer.is_valid():
            userdetails_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Failed to Update")

    elif request.method == 'DELETE':
        userDetail = userDetails.objects.get(Id = id)
        userDetail.delete()
        return JsonResponse("Deleted Successfully", safe = False)





@csrf_exempt
def UsersApi(request,id=0):
    if request.method == 'GET':
        users = Users.objects.all()
        user_serializer = UsersSerializer(users,many = True)
        return JsonResponse(user_serializer.data, safe = False)

    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_serializer = UsersSerializer(data= user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failed to Add", safe = False)

    elif request.method == 'PUT':
        user_data = JSONParser().parse(request)
        user = Users.objects.get(Id = user_data['Id'])
        user_serializer = UsersSerializer(user,data = user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Failed to Update")

    elif request.method == 'DELETE':
        user = Users.objects.get(Id = id)
        user.delete()
        return JsonResponse("Deleted Successfully", safe = False)