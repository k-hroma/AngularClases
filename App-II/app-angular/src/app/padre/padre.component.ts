import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from '../hijo2/hijo2.component';
import { InterpolacionComponent } from '../interpolacion/interpolacion.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent, Hijo2Component, InterpolacionComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

}
