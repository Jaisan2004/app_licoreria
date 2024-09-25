import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Primero, asegurarnos de que el usuario está autenticado
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    // Obtener el token del usuario y verificar si es un administrador
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const decodedToken = this.decodeToken(token);
    if (!decodedToken || !decodedToken.isAdmin) {
      // Si no es administrador, redirigirlo a la página de cliente o una página de error
      this.router.navigate(['/cliente']); // Puedes ajustar la redirección según tu aplicación
      return false;
    }

    // Si el usuario es administrador, permitir el acceso a la ruta
    return true;
  }

  decodeToken(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Decodificar el payload del JWT
    } catch (error) {
      console.error('Error al decodificar el token', error);
      return null; // Si hay un error al decodificar, devolver null
    }
  }
}
