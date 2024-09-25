import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Verificar si el usuario ya está autenticado al cargar la aplicación
    this.isAuthenticated = this.authService.isAuthenticated();

    // Redirigir al login si no está autenticado
    if (!this.isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    // Lógica para cerrar sesión
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
