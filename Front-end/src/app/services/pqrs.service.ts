import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  private apiUrl = 'http://localhost:8080/api/pqrs';  // Cambia esta URL según tu backend

  constructor(private http: HttpClient) { }

  getPqrs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPqr(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPqr(pqr: any): Observable<any> {
    return this.http.post(this.apiUrl, pqr);
  }

  updatePqr(id: number, pqr: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pqr);
  }

  deletePqr(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
