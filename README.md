# AngularClases

## Introducción

### Creación de un nuevo proyecto

```sh
ng new nombre-del-proyecto
```

### Creación de nuevos componentes

```sh
ng generate component mi-componente
```

## Flujo inicial

- los archivos principales son:
  -- index.html: proporciona la base en la que Angular se monta  
  -- main.ts: se encarga de inicializar la aplicación.

### "main.ts""

- Es el primer archivo TypeScript que se ejecuta.
- Se encarga de arrancar la aplicación importando el módulo principal (AppModule).
- Llama a bootstrapApplication() para iniciar la app y asociarla al DOM.
- Es el archivo que manda a llamar la clase de TypeScript AppComponent que se encuentra en "app.component.ts"

### "index.html"

- Es el punto de entrada de la aplicación en el navegador.
- Contiene la estructura HTML inicial y por default una etiqueta especial (<app-root></app-root>) que representa el componente principal de Angular.
- De esta manera se ejecuta la lógica definida dentro del componente del app-root

### Componente Standalone Principal

## "app.component.ts"

- Este es el componente raíz de la aplicación. Dado que es un
  standalone component, se define con standalone: true y se importa directamente
  en main.ts. Su selector (<app-root>) se utiliza en index.html para renderizar la
  aplicación.

```sh
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo desde Angular';
}
```

## "app.component.html"

- es el archivo que por medio de la interpolación permite acceder a las variables o métodos definidos en el archivo app.component.ts

```sh
{{title}}
```

### Renderizado en el Navegador

• Carga Inicial: El navegador carga el archivo index.html, que contiene el elemento
<app-root>. Angular lo reemplaza con el contenido del AppComponent.
• Angular CLI: Utilizando ng serve, Angular CLI compila la aplicación,
convirtiendo TypeScript en JavaScript, y sirve la aplicación en un servidor de
desarrollo.
• Rutas y Navegación: Las rutas siguen funcionando de manera similar, pero ahora
pueden ser definidas dentro de los standalone components o en archivos de
configuración de rutas.

### Diagrama Conceptual del Flujo de Ejecución para Standalone Components

El siguiente diagrama conceptual ilustra cómo funciona el flujo de una aplicación Angular 18 utilizando standalone components:

package.json + angular.json (Configuración Inicial)
|
main.ts (Punto de entrada)
|
bootstrapComponent(AppComponent)
|
AppComponent (Componente raíz standalone)
|
index.html (Renderiza <app-root>)
|
Angular CLI (Compila y sirve la app)
|
Browser (Carga y Renderizado)
|
Componente -> Servicio -> Rutas
|
Ciclo de Vida de Componentes
Este flujo actualizado refleja el enfoque más modular y directo de Angular, donde se eliminan los módulos tradicionales en favor de standalone components, permitiendo una estructura más ligera y sencilla para las aplicaciones.

## Componentes en Angular

- En Angular, un componente es una pieza fundamental que representa una parte de la
  interfaz de usuario (UI). Cada componente consta de tres partes principales:

1. HTML: Define la estructura y el contenido visual del componente.
2. CSS: Aplica estilos específicos al componente.
3. TypeScript: Contiene la lógica del componente, como propiedades, métodos y el
   manejo de eventos.
   Los componentes son la base de cualquier aplicación Angular, ya que permiten dividir la
   UI en partes reutilizables y modulares.

### Sintaxis Básica para Crear un Componente

- Para crear un componente en Angular, se utiliza el decorador @Component. Este decorador define los metadatos del componente, como su selector, plantilla, y estilos.
- Ejemplo Básico:

```sh

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

```

### Creacion de un componente utilizando Angular CLI

```sh
ng g c nombre-del-componente
```

- Este comando generará los archivos necesarios para el componente:
  • Un archivo .ts con la lógica del componente.
  • Un archivo .html con la plantilla del componente.  
  • Un archivo .css para los estilos del componente.
  • Un archivo de prueba .spec.ts.

# Bootsrap

## Instalar Bootstrap y Popper.js

-Primero, necesitas instalar Bootstrap y Popper.js (una dependencia requerida por Bootstrap
para algunos componentes como los tooltips):

```sh
npm install bootstrap@latest --save
```

@PopperJs es opcional:

```sh
npm install @popperjs/core --save
```

## Configurar Bootstrap en Angular

Después de instalar Bootstrap, debes agregar los estilos de Bootstrap en tu proyecto. Esto se hace incluyendo el archivo CSS de Bootstrap en el archivo angular.json.

1. Abre el archivo angular.json.
2. Busca la sección "styles" y agrega la ruta al archivo CSS de Bootstrap. También puedes agregar la ruta a Popper.js de manera opcional en la sección "scripts" si planeas usar componentes que lo necesiten.

```sh
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"],

  "scripts": [
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
```

### Uso de varios componentes

1. Crear el componente padre

```sh
ng g c padre --skip-tests
```

2. Crear el componente hijo

```sh
ng g c /padre/hijo --skip-tests
```

3. Relacionar los componentes

- agregar las clases hijas en el atributo imports:[] del decorador @Component de la clase padre.

- crear los archivos html y ts hijas y guardarlos

-agregar el selector de las clases hijas al html padre

- agregar el selector padre al app.component.html
