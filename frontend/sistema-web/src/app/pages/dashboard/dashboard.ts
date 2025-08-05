import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../../services/aluno';
import { Aluno } from '../../interfaces/aluno.interface';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  alunos: Aluno[] = [] // array pra armazenar os alunos
  isLoading = true; // variavel pra controlar o estado do carregamento

  constructor(private alunoService: AlunoService){}

  ngOnInit(): void {
      this.carregarAlunos();
  }

  carregarAlunos():void{
    this.isLoading = true;
    this.alunoService.getAlunos().subscribe({
      next: (data) => {
        this.alunos = data;
        this.isLoading = false;
        console.log('Alunos carregados com sucesso: ', this.alunos);
      },
      error:(err) =>{
        console.error('Erro ao caregar alunos:',err);
        this.isLoading = false;
      }
    });
  }
}
