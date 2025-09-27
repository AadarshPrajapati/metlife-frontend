import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    { name: 'Dashboard', route: 'dashboard' },
    { name: 'Policies Overview', route: 'policies' },
    { name: 'Claim Overview', route: 'claims' },
    { name: 'Health Tips & Notifications', route: 'tips' }
  ];

  // Sample user data
  user = {
    user_id: 123456789,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 35,
    gender: 'Male'
  };

  showProfileDropdown = false;

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  maskEmail(email: string) {
    const [user, domain] = email.split('@');
    const maskedUser = user[0] + '***' + user.slice(-1);
    return maskedUser + '@' + domain;
  }
}
