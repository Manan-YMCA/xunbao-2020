from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField
from rest_framework_simplejwt.serializers import TokenObtainSerializer
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Question,Submission,HintModel,UserProfile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="user-detail")

    class Meta:
        model = User
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ("ques", "no")


class SubmissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Submission
        fields = "__all__"


class HintSerializer(serializers.ModelSerializer):

    class Meta:
        model = HintModel
        fields = "__all__"
