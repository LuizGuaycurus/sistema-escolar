# backend/api/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AlunoViewSet

# Importações para o JWT
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'alunos', AlunoViewSet, basename='aluno')

# As URLs da API são determinadas automaticamente pelo roteador.
urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]