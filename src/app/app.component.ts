import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { CursosComponent } from "./cursos/cursos/cursos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateralComponent, CursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
