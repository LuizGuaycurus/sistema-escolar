import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard'; 

export const routes: Routes = [
  // Rota padrão, redireciona para o login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Rota da página de login
  { path: 'login', component: LoginComponent },

  // Rota da página de dashboard (esta é a que provavelmente está faltando)
  { path: 'dashboard', component: DashboardComponent },
];