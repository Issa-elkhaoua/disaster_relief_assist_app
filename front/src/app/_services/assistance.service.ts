import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  private baseUrl = 'http://localhost:8380/assistances';

  constructor(private http: HttpClient) { }

  getAllAssistances(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAssistanceByUserId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  getAssistanceById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAssistanceNameById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${id}`);
  }

  createAssistance(assistance: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, assistance);
  }

  updateAssistance(id: number, assistance: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, assistance);
  }

  deleteAssistance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}

