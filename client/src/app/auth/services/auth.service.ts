import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import decode from 'jwt-decode';

import { environment } from '../../../environments/environment';
import { SigninRequest } from '../models/signin.request';
import { AuthStorage } from '../enums/auth.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly hostAuth = `${environment.apiUrl}login/`;

  constructor(private http: HttpClient) { }

  signIn(login: SigninRequest) {
    return this.http.post(this.hostAuth, login);
  }

  logout() {
    this.saveUserToken('');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(AuthStorage.AutenticatedUser);
  }

  saveUserToken(token: string): void {
    localStorage.setItem(AuthStorage.AutenticatedUser, token);
  }

  public get UserData(): any {
    const token = localStorage.getItem(AuthStorage.AutenticatedUser);
    if (!token) { return null; }
    const tokenPayload = decode(token);
    return tokenPayload.user;
  }
}
