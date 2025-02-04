import { Component } from '@angular/core';



@Component({
  selector: 'app-nuevo-componente',
  imports: [],
  templateUrl: './nuevo-componente.component.html',
  styleUrl: './nuevo-componente.component.css'
})
export class NuevoComponenteComponent {
  componenteUno = 'Componente Uno desde la clase C1 definida en el ts'
}
