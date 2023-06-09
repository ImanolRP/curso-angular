import { Component } from '@angular/core';
import { DbzCharacter } from '../../interfaces/DbzCharacter';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './dbz-main-page.component.html',
  styleUrls: ['./dbz-main-page.component.css']
})
export class DbzMainPageComponent {

  constructor(
    private dbzService: DbzService
  ){}

  get characters(): DbzCharacter[] {
    return [...this.dbzService.characters]
  }

  public onEventDeteleByUuid (uuid: string): void {
    this.dbzService.onDeleteCharacter(uuid)
  }

  public onEventNewCharacter(character: DbzCharacter): void {
    this.dbzService.onNewCharacter(character)
  }
}
