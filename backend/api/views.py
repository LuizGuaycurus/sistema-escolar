from django.shortcuts import render
from .models import Aluno
from .serializers import AlunoSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class AlunoViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite aos alunos serem visualizados ou editados.
    """
    queryset = Aluno.objects.all().order_by('nome_completo')
    serializer_class = AlunoSerializer
    permission_classes = [IsAuthenticated] 