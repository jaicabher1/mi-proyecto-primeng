import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { CursosComponent } from "./cursos/cursos/cursos.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateralComponent, CursosComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isLoggedIn.subscribe(val => {
      this.isLoggedIn = val;
    });
  }
}
