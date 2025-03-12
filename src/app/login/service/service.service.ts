import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private users = [
    { email: 'admin@admin.com', password: 'Admin' },
    { email: 'user2@example.com', password: 'password456' },
  ];

  private isLoggedIn = false;
  private currentUserEmail: string | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    console.log('Login called');
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      this.isLoggedIn = true;
      this.currentUserEmail = email;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUserEmail = null;
    this.router.navigate(['/login']);
  }

  getCurrentUser(): string | null {
    return this.currentUserEmail;
  }
}
