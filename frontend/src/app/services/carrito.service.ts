import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:3000/carrito';  // Reemplazar con el endpoint real

  constructor(private http: HttpClient) { }

  // Obtener productos en el carrito
  getCarrito(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Añadir un producto al carrito
  addProductoCarrito(producto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, producto);
  }

  // Eliminar un producto del carrito
  removeProductoCarrito(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Procesar la compra
  procesarCompra(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/comprar`, {});
  }
}
