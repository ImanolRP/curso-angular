import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DbzCharacter } from '../../interfaces/DbzCharacter';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Input()
  public characterList: DbzCharacter[] = [
    {
      uuid: '',
      name: '',
      power: 0
    }
  ]

  @Output()
  public onEventDeleteByUuid: EventEmitter<string> = new EventEmitter()

  public onDeleteCharacter(uuid: string): void{
    this.onEventDeleteByUuid.emit(uuid);
  }

}
