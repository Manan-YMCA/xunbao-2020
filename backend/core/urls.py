from django.urls import path, include
from .views import Home,QuestionView,UserProfileAPIViewSet, UserViewSet, SubmissionAPIView, QuestionAPIView
from rest_framework.routers import DefaultRouter
app_name = 'core'

router = DefaultRouter()
router.register('user', UserViewSet, basename='user')
router.register('userprofile', UserProfileAPIViewSet, basename='userprofile')
router.register('question', QuestionAPIView, basename='question')
router.register('submission', SubmissionAPIView, basename='submission')


urlpatterns = [
    path('', Home, name='home'),
    path('leaderboard/', QuestionView, name='ques'),
    path('developers/', QuestionView, name='ques'),
    path('ques/<int:no>', QuestionView, name='ques'),
    path('api/', include(router.urls)),

]
