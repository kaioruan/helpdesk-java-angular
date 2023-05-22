import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from '../config/api.config';
import { User } from '../models/user';
import { Credenciais } from '../models/credenciais';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private cookieService: CookieService,) { }

  loginValidate(token): Observable<User> {
    return this.http.get<User>(`http://localhost:3001/login/validate`, {
      headers: {
        'authorization': `${token}`
      }
    });
  }

  authenticate(creds: Credenciais) {
      return this.http.post<User>(`http://localhost:3001/login`, creds);
  }


  isAuthenticated() {
    let token = this.cookieService.get('token');
    if(token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout() {
    this.cookieService.delete('token');
  }
}
