import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem('auth-token'); 
    window.sessionStorage.setItem('auth-token', token);
  }

  public getUserIdFromToken(): string | undefined {
    const token = window.sessionStorage.getItem('auth-token');
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.sub;  // 'sub' is a string
    }
    return undefined;
  }
  
  

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    const token = window.sessionStorage.getItem('auth-token');
    return token != null;  // Returns true if token exists, false otherwise

  }
}
