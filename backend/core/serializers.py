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


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = UserProfile
        fields = "__all__"


class QuestionSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Question
        fields = ("ques", "no")


class SubmissionSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Submission
        fields = "__all__"

    # def create(self, validated_data):
    #     tmp_post = validated_data
    #     submission = Submission.objects.create(
    #         fid=tmp_post['fid'],
    #         ques=tmp_post['ques'],
    #         answer=tmp_post['answer'],
    #     )
    #
    #     return submission


class HintSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = HintModel
        fields = "__all__"
