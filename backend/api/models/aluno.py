from django.db import models

class Aluno(models.Model):
    nome_completo = models.CharField(max_length=255)
    data_nascimento = models.DateField()
    email = models.EmailField(unique=True)
    telefone = models.CharField(max_length=20, blank=True, null=True)
    data_matricula = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome_completo