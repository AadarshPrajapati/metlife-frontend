import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface LoginResponse {
  status: boolean;
  message: string;
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // BehaviorSubject to hold current user ID
  private currentUserId = new BehaviorSubject<number | null>(null);

  // Observable for other components to subscribe
  currentUserId$ = this.currentUserId.asObservable();

  constructor() {}

  login(email: string, password: string): Observable<LoginResponse> {
    // Mock response for now
    const mockUserId = 12345;

    if (true) {
      this.currentUserId.next(mockUserId); // store globally
      return of({ status: true, message: 'Login successful', userId: mockUserId });
    } else {
      return of({ status: false, message: 'Invalid email or password' });
    }

    // For real API call, uncomment below
    // return this.http.post<LoginResponse>('https://api.example.com/login', { email, password })
    //   .pipe(tap(res => res.status && this.currentUserId.next(res.userId)));
  }

  logout() {
    this.currentUserId.next(null); // clear on logout
  }

  getUserId(): number | null {
    return this.currentUserId.value;
  }
}
