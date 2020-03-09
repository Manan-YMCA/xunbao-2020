from django.contrib import admin
from django.urls import path, include
from core import views
from django.contrib.auth import views as auth_views
from rest_framework_simplejwt import views as jwt_views
from rest_framework.routers import DefaultRouter
from core.views import UserProfileAPIViewSet, UserViewSet, SubmissionAPIView, QuestionAPIView, HintView

router = DefaultRouter()
router.register('user', UserViewSet, basename='user')
router.register('userprofile', UserProfileAPIViewSet, basename='userprofile')
router.register('question', QuestionAPIView, basename='question')
router.register('submission', SubmissionAPIView, basename='submission')
router.register('hint', HintView, basename='hintmodel')


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.home, name="home"),
    path('core/', include('core.urls', namespace='core')),
    path("login/", views.login, name="login"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    path('social-auth/', include('social_django.urls', namespace="social")),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls), name='api'),

]
