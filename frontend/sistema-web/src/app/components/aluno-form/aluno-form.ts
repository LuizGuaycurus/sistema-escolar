import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../../services/aluno';
import { Aluno } from '../../interfaces/aluno.interface';

@Component({
  selector: 'app-aluno-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css'
})
export class AlunoFormComponent {
  @Output() close = new EventEmitter<void>();
  @Output() alunoCriado = new EventEmitter<Aluno>();

  // objeto pra guardar dados do formulario
  aluno = {
    nome_completo: '',
    data_nascimento: '',
    email: '',
    telefone: '',
  };

  constructor(private alunoService: AlunoService){}

  onSubmit(): void {
    this.alunoService.createAluno(this.aluno).subscribe({
      next: (novoAluno) =>{
        console.log("Aluno criado com sucesso", novoAluno);
        this.alunoCriado.emit(novoAluno);
        this.close.emit();
      },
      error: (err) =>{
        console.error("Erro ao criar aluno", err);
      }
    });
  }

  closeModal():void{
    this.close.emit();
  }
}
