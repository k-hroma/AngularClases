import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PadreComponent } from './padre/padre.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, InterpolacionComponent, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inicio de Aplicacion - Carga de componentes';
  titleBootsrap = 'Estoy usando las clases y estilos de bootstrap'
}
