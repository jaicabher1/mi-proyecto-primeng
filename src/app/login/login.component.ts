import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  imports: [IconFieldModule, InputIconModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private readonly validEmail = 'idom@eoi.com';
  private readonly validPassword = 'password';

  email: string = '';
  password: string = '';
  checked: boolean = false;
  errorMsg: string = '';

  constructor(private auth: AuthService, private router: Router) {
    // Si ya está logueado, redirigir automáticamente
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/']); // Cambia '/home' por tu ruta real
    }
  }

  login() {
    if (
      this.email === this.validEmail &&
      this.password === this.validPassword
    ) {
      this.auth.login();
      this.errorMsg = '';
      console.log('Login successful');
    } else {
      this.errorMsg = 'Email or password incorrect';
    }
  }

}
