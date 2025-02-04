import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-componente',
  imports: [],
  templateUrl: './prueba-componente.component.html',
  styleUrl: './prueba-componente.component.css'
})
export class PruebaComponenteComponent {
  nuevoParrafo = 'soy un nuevo párrafo';
  nuevoParrafoI = "soy otro tonto pàrrafo";
}
