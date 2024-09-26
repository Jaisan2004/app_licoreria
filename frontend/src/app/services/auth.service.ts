import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'auth/';
   }

 login(body: any): Observable<string>{
  return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}login`, body);
 }

 postUsuarios(body:any):Observable<any>{
  return this.http.post(`${this.myAppUrl}${this.myApiUrl}registro`,body);
 }
}
