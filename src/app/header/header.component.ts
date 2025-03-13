import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiceService } from '../login/service/service.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink , CommonModule],
})
export class HeaderComponent implements OnInit, OnChanges {
  currentUserEmail: string | null = null;
  isDropdownOpen = false;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.updateUserState();
  }

  ngOnChanges() {
    this.updateUserState();
  }

  updateUserState() {
    this.currentUserEmail = this.service.getCurrentUser();
  }

  isAuthenticated(): boolean {
    return this.service.isAuthenticated();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout(): void {
    this.service.logout();
    this.updateUserState();
  }
}
