import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

const AUTH_API = 'http://localhost:8082/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, 
              private router: Router, 
              private storageService: StorageService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(AUTH_API + 'authenticate', {
      email,
      password
    }, httpOptions);
  }


  register(firstname: string, lastname: string, email: string, password: string, role: String): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        firstname,
        lastname,
        email,
        password,
        role
      },
      httpOptions
    );
  }
  

  logout(): Observable<any> { 
    this.storageService.clean(); 
    //this.router.navigate(['/login']); // Redirect to the login page

    return new Observable(observer => {
      observer.complete();
    });
  }
}
