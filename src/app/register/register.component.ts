import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

interface RegisterResponse {
  status: boolean;
  message: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  mobile = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {}

  onRegister(form: NgForm) {
    if (form.invalid) return;

    this.registerUser(this.name, this.email, this.mobile, this.password).subscribe(res => {
      if (res.status) {
        alert('Registration successful! 🎉 Redirecting to login...');
        this.router.navigate(['/']);
      } else {
        alert('Registration failed: ' + res.message);
      }
    });
  }

  /** Mock API call */
  registerUser(name: string, email: string, mobile: string, password: string): Observable<RegisterResponse> {
    // Uncomment for real API call
    // return this.http.post<RegisterResponse>('https://api.example.com/register', { name, email, mobile, password });

    const mockResponse: RegisterResponse = { status: true, message: 'User registered successfully' };
    return of(mockResponse);
  }
}
