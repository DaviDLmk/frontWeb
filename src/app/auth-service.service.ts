import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authentification(login: string, password: string) {

    return this.http.post('/api/login', { login, password });
      // this is just the HTTP call, 
      // we still need to handle the reception of the token
      // .shareReplay();
  }

}
