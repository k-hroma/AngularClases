import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  imports: [],
  template: `
  <h1>{{tituloComponenteInline}}</h1>
      <p>
      componente-inline works!
    </p>
  `,
  styles: `
  h1{color:blue;}
  p{font-size:3rem;
  background-color: violet;}`
})
export class ComponenteInlineComponent {
  tituloComponenteInline = 'Hola Soy Un Componente En Linea'
}
