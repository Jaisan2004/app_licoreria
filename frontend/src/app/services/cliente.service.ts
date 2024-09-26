import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'Usuario';
   }

  getClientes(): Observable<string>{
    return this.http.get<string>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getCliente(id: number): Observable<string>{
    return this.http.get<string>(`${this.myAppUrl}${this.myApiUrl}/ById/${id}`);
  }


}
