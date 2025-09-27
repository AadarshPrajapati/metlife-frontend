import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;

  constructor(private auth: AuthService, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) return;

    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        if (res.status) {
          this.router.navigate(['/home']);
        } else {
          form.controls['password'].setErrors({ apiError: res.message });
        }
      },
      error: () => {
        form.controls['password'].setErrors({ apiError: 'Server error, try again' });
      }
    });
  }
}
