import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service/service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule,CommonModule , IonicModule],
})
export class LoginComponent {

  email = '';
  password = '';
  loginFailed = false;

  constructor(private authService: ServiceService, private router: Router) {}

  onLogin() {
    console.log('Login clicked');
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
    }
  }
}
