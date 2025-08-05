import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../interfaces/aluno.interface';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {
  // url endpoint alunos no backend
  private apiUrl = 'http://127.0.0.1:8000/api/alunos/';

  constructor(private http: HttpClient){}

    // busca  a lista de todos os alunos da api
    // o interceptador irá adcionar o token de autentificação automaticamente

    getAlunos(): Observable<Aluno[]> {
      return this.http.get<Aluno[]>(this.apiUrl);
    }
}
