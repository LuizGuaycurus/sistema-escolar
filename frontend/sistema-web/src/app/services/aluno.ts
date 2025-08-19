import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../interfaces/aluno.interface'; 

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  // URL do endpoint alunos
  private apiUrl = 'http://127.0.0.1:8000/api/alunos/';

  constructor(private http: HttpClient) { }

  
  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  createAluno(alunoData: Omit<Aluno, 'id' | 'data_matricula'>): Observable<Aluno>{
    return this.http.post<Aluno>(this.apiUrl,alunoData);
  }
}
