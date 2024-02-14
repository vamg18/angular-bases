import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //Se defina una propiedad que será un objeto de EventEmitter, un emisor de eventos. Permitirá emitir un objeto de tipo Character
  //Se agregar el decorador Output para se sea visible afuera
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emiCharacter():void{

    if( this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character});

    this.character = {
      name: '',
      power: 0
    };

  }

}
