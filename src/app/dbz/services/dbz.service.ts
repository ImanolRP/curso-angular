import { Injectable } from '@angular/core';
import { DbzCharacter } from '../interfaces/DbzCharacter';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: DbzCharacter[] = [
    {
      uuid: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      uuid: uuid(),
      name: 'Goku',
      power: 9500
    },{
      uuid: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  public onNewCharacter(character: DbzCharacter): void{
    let newCharacter: DbzCharacter = {...character, uuid: uuid()}

    this.characters.push(newCharacter)
  }

  public onDeleteCharacter(uuid: string): void{
    this.characters = this.characters.filter((character) => character.uuid !== uuid)
  }

}
