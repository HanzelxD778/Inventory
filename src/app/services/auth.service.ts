import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Auth } from '../models/auth.model';
import { TokenService } from './token.service'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(user: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, {user, password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.data.token))
    );
  }

  profiles() {
    //let headers = new HttpHeaders();
    //headers = headers.set('Authorization', `Bearer ${token}`);
    //headers = headers.set('Content-type', 'application/json');
    return this.http.get(`${this.apiUrl}/users/`);
  }

  logout() {
    localStorage.removeItem('token');
    console.log("Sesion olvidada");
  }
}
