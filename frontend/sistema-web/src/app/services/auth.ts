import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // url do endpoint de token
  private apiUrl = 'http://127.0.0.1:8000/api/token/';
  private tokenKey = 'auth_token';


//injetar o httpclient no construtor para poder fazer requisições web

  constructor(private http: HttpClient){}

  login(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, credentials).pipe(
      tap(response => this.storeToken(response.access))
    );
  }

   // Salva o token no localStorage
  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Recupera o token do localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}



