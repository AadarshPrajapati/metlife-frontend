import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface LoginResponse {
  status: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/login'; // 🔹 replace with your API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    // return this.http.post<LoginResponse>(this.apiUrl, { email, password });
     const mockResponse: LoginResponse = {
      status: true,
      message: 'Login successful'
    };
    return of(mockResponse); // 'of' creates an Observable that emits mockResponse
  }
}