from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from .models import Question,Submission,HintModel,UserProfile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="core:user-detail")

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'first_name', 'last_name']


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    user_url = serializers.HyperlinkedIdentityField(view_name="core:userprofile-detail")
    user = UserSerializer(many=False)

    class Meta:
        model = UserProfile
        fields = ['user_url','user','pic','score','level','submission_count', 'fid']

class QuestionSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Question
        fields = ['ques', 'hint', 'no']


class SubmissionSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer(many=False)
    user_id = PrimaryKeyRelatedField(source='user', queryset=User.objects.all(), write_only=True)
    ques = QuestionSerializer(many=False)
    ques_id = PrimaryKeyRelatedField(source='ques', queryset=Question.objects.all(), write_only=True)

    class Meta:
        model = Submission
        fields = "__all__"
