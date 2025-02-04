import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { PruebaComponenteComponent } from './prueba-componente/prueba-componente.component';
import {
  ComponenteInlineComponent
} from './componente-inline/componente-inline.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PadreComponent } from './padre/padre.component'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, PruebaComponenteComponent, ComponenteInlineComponent, InterpolacionComponent, PadreComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo desde Angular';
}
