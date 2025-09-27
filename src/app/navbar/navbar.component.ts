import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarService, User } from '../navbar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems = [
    { name: 'Dashboard', route: 'dashboard', disabled: true },
    { name: 'Policies Overview', route: 'policies', disabled: true },
    { name: 'Claim Overview', route: 'claims', disabled: true }, // example disabled
    { name: 'Check Health', route: 'checkhealth', disabled: false }
  ];


  user: User = {
    user_id: 0,
    name: '',
    email: '',
    age: 0,
    gender: ''
  };

  showProfileDropdown = false;

  constructor(private navbarService: NavbarService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

    this.auth.currentUserId$.subscribe(id => {
      this.navbarService.getUser().subscribe(data => {
        this.user = data;
      });
    });
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  maskEmail(email: string) {
    const [user, domain] = email.split('@');
    const maskedUser = user[0] + '***' + user.slice(-1);
    return maskedUser + '@' + domain;
  }

  logout(event: Event) {
    event.stopPropagation(); // Prevent dropdown from closing immediately
    // Clear any user session if you have one
    // e.g., localStorage.removeItem('token');
    this.router.navigate(['/']); // redirect to login/homepage
  }
}
