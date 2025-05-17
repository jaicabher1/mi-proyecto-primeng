import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

import { CURSOS } from '../mock-cursos'; 




@Component({
  selector: 'app-cursos',
  imports: [FormsModule, TableModule, CommonModule, ButtonModule, MultiSelectModule, IconFieldModule, InputIconModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  materias: any[] = [
    { name: 'Matemáticas', id: 1 },
    { name: 'Lengua', id: 2 },
    { name: 'Historia', id: 3 },
    { name: 'Geografía', id: 4 },
    { name: 'Ciencias Naturales', id: 5 },
    { name: 'Educación Física', id: 6 },
    { name: 'Arte', id: 7 },
    { name: 'Inglés', id: 8 }
  ];

  duracion: any[] = [
    { horas: 20, id: 1 },
    { horas: 40, id: 2 },
    { horas: 60, id: 3 },
    { horas: 80, id: 4 },
    { horas: 100, id: 5 },
    { horas: 120, id: 6 },
    { horas: 140, id: 7 },
    { horas: 160, id: 8 }
  ];

  cursos = CURSOS;

  materiasSeleccionadas: any[] = [];
  duracionSeleccionadas: any[] = [];
  busquedaTexto: string = '';


  estadoClass(estado: string) {
    return {
      'badge': true,
      'badge-blue': estado === 'En planificación',
      'badge-orange': estado === 'Pendiente de aprobación',
      'badge-yellow': estado === 'En diseño',
      'badge-green': estado === 'Ejecución'
    };
  }

  get cursosFiltrados() {
    return this.cursos.filter((curso) => {
      const nombreMatch = curso.nombre.toLowerCase().includes(this.busquedaTexto.toLowerCase());

      const duracionCurso = curso.horasLectivas + curso.horasTutoria;

      const duracionMatch =
        this.duracionSeleccionadas.length === 0 ||
        this.duracionSeleccionadas.includes(duracionCurso);

      return nombreMatch && duracionMatch;
    });
  }



}
