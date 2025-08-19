import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { MainLayoutComponent } from './layouts/main-layout/main-layout'; 
import { DashboardComponent } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  
  
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },

  {
    path: '', 
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { 
        path: 'dashboard', 
        component: DashboardComponent 
      },
    ]
  },

  // rota de fallback (se nenhuma rota corresponder)
  { 
    path: '**', 
    redirectTo: '/dashboard' 
  }
];
