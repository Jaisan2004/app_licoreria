import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const decodedToken = this.decodeToken(token);
    if (!decodedToken) {
      this.router.navigate(['/login']);
      return false;
    }

    const isAdmin = decodedToken.isAdmin;
    if (this.router.url.includes('admin') && !isAdmin) {
      this.router.navigate(['/cliente']);
      return false;
    }

    return true;
  }

  decodeToken(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Decodifica el payload del JWT
    } catch (error) {
      console.error('Error al decodificar el token', error);
      return null; // En caso de error, devuelve null
    }
  }
}

