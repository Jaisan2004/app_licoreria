import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientePedidoService {
  private apiUrl = 'http://localhost:3000/pedidos';  // Reemplazar con el endpoint real

  constructor(private http: HttpClient) { }

  // Obtener los pedidos del cliente
  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Crear un pedido
  createPedido(pedido: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pedido);
  }

  // Eliminar un pedido
  deletePedido(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
