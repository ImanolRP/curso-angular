import { Component, EventEmitter, Output } from '@angular/core';
import { DbzCharacter } from '../../interfaces/DbzCharacter';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrls: ['./dbz-add-character.component.css']
})
export class DbzAddCharacterComponent {

  @Output()
  public onEventNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter()

  public character: DbzCharacter = {
    uuid: '',
    name:'',
    power: 0
  }

  public emitCharacter(): void {
    this.onEventNewCharacter.emit({...this.character})

    this.character.uuid = ''
    this.character.name = ''
    this.character.power = 0
  }

}
