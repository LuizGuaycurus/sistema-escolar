import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { MainLayoutComponent } from './layouts/main-layout/main-layout'; 
import { DashboardComponent } from './pages/dashboard/dashboard';

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
