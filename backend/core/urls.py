from django.urls import path, include
from .views import QuestionView
app_name = 'core'



urlpatterns = [
    path('leaderboard/', QuestionView, name='ques'),
    path('developers/', QuestionView, name='ques'),
    path('ques/<int:no>', QuestionView, name='ques'),

]
