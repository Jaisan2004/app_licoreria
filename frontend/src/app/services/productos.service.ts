import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos';  // Reemplazar con el endpoint real
  private categoriasUrl = 'http://localhost:3000/categorias';  // Endpoint para obtener categorías

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener categorías de productos
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriasUrl);
  }

  // Añadir un producto al carrito
  addProductoCarrito(producto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/carrito`, producto);
  }
}
