import json

from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from rest_framework import viewsets, status
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import update_session_auth_hash
from rest_framework.response import Response
from social_django.models import UserSocialAuth
from django.http import JsonResponse
from django.core import serializers

from .serializers import UserSerializer,SubmissionSerializer,QuestionSerializer,UserProfileSerializer, HintSerializer
from .models import Question,Submission,Answer,UserProfile, HintModel
from .forms import AnswerForm
# Create your views here.

#
# def login(request):
#     logout(request)
#     return render(request, 'login.html')


def home(request):
    return redirect('api/')


# API VIEWS

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class UserProfileAPIViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class QuestionAPIView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    # queryset = Question.objects.all()

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        # fid = self.kwargs['fid']
        fid = self.request.query_params.get('fid', None)
        user = UserProfile.objects.get(fid=fid)
        level = user.level
        return Question.objects.filter(no=level)

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


class SubmissionAPIView(viewsets.ModelViewSet):
    serializer_class = SubmissionSerializer
    queryset = Submission.objects.all()

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

    # def create(self, request, *args, **kwargs):
    #     context = {'request': request}
    #     serializer = SubmissionSerializer(context, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class HintView(viewsets.ModelViewSet):
    serializer_class = HintSerializer
    queryset = HintModel.objects.all()

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]



def GetQuestionAPI(request, fid):
    user = UserProfile.objects.get(fid=fid)
    level = user.level
    question = Question.objects.filter(no=level)
    data = serializers.serialize("json", question)

    return JsonResponse(data,safe=False)