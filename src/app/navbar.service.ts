import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface User {
  user_id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor(private http: HttpClient) {}

  /** Fetch user data from API */
  getUser(): Observable<User> {
    // Uncomment for real API call
    // return this.http.get<User>('https://api.example.com/user/123');

    // Mock sample data
    const mockUser: User = {
      user_id: 123456789,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 35,
      gender: 'Male'
    };
    return of(mockUser);
  }
}
