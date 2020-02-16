from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from .models import Submission


class AnswerForm(forms.ModelForm):
    class Meta:
        model = Submission
        fields = ['answer']
