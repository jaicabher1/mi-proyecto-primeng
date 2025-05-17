import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  imports: [MenubarModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {
  usuario: { nombre: string } | null = null;

  constructor() {
    // Simulación de un usuario autenticado
    this.usuario = { nombre: 'Juan Pérez' };
  }


  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: PrimeIcons.HOME, routerLink: ['/home'] },
      { label: 'Alumnos', icon: 'pi pi-users', routerLink: ['/alumnos'] },
      { label: 'Docentes', icon: 'pi pi-briefcase', routerLink: ['/docentes'] },
      { label: 'Cursos', icon: 'pi pi-book', routerLink: ['/cursos'] },
      { label: 'Encuestas', icon: 'pi pi-question-circle', routerLink: ['/encuestas'] },
      { label: 'Configuración', icon: 'pi pi-cog', routerLink: ['/configuracion'] }
    ];
  }

}
