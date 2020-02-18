from django.urls import path, include
from .views import Home,QuestionView
app_name = 'core'



urlpatterns = [
    path('', Home, name='home'),
    path('leaderboard/', QuestionView, name='ques'),
    path('developers/', QuestionView, name='ques'),
    path('ques/<int:no>', QuestionView, name='ques'),

]
