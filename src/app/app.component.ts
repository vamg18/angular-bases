import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//El decorador transforma la clase a un componente

export class AppComponent {
  public title: string = 'Hola mundo';

}
