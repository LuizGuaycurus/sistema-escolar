import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //injeta o authservice pra pegar o token
  const authService = inject(AuthService);
  const authToken = authService.getToken();

  //se um token existir, clona a requisição e adciona o header de autorização
  if(authToken){
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    // envia a requisição clonada com cabeçalho
    return next(authReq);
  }
  // se não houver token, envia a requisição original
  return next(req);
};
