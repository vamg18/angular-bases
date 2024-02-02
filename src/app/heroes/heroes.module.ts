import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [ /* Se exportan para que sean visibles fuera del módulo */
    HeroComponent,
    ListComponent
  ],
  imports: [ /*En imports siempre van a ir módulos. En este caso se importa el módulo CommonModule que trae las directivas ngIf ngFor que se están usando en el módulo héroes */
    CommonModule
  ]
})

export class HeroesModule {}
