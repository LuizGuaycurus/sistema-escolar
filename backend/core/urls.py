# backend/core/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')), # Para o botão de Login
    path('api/', include('api.urls')), # Para nossos dados (alunos, etc.)
]