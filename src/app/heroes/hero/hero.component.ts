import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  private static DEFAULT_NAME: string = 'iron man'
  private static DEFAULT_AGE: number = 45

  public name: string = HeroComponent.DEFAULT_NAME
  public age: number = HeroComponent.DEFAULT_AGE

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  public changeHero(): void {
    this.name = 'spiderman'
  }

  public changeAge(): void {
    this.age = 25
  }

  public reset(): void {
    this.name = HeroComponent.DEFAULT_NAME
    this.age = HeroComponent.DEFAULT_AGE
  }

}
