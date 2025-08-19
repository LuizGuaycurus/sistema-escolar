import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthResponse } from "../interfaces/auth.interface";
import { isPlatformBrowser } from "@angular/common";


@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private apiUrl = 'http://127.0.0.1:8000/api/token/';
  private tokenKey = 'auth_token';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(credentials: any): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.apiUrl, credentials).pipe(
      tap(response => this.storeToken(response.access))
    );
  }

  // salva o token no localStorage mas apenas se tiver no navegador
  private storeToken(token:string): void{
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem(this.tokenKey,token);
    }
  }

  //recupera o token no localStorage apenas se tiver no navegador
  getToken():string | null {
    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem(this.tokenKey);
    }
    // se tiver no servidor retorna null
    return null;
  }

  logout():void{
    if(isPlatformBrowser(this.platformId)){
      localStorage.removeItem(this.tokenKey);
    }
  }

}