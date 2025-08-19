import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule,RouterModule,SidebarComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayoutComponent {
  isSidebarCollapsed = false;

  constructor(private authService: AuthService, private router: Router){}

  toggleSidebar() : void{
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onLogout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
