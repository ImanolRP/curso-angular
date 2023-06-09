import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent {

  public static DEFAULT: number = 10

  public counter: number = CounterComponent.DEFAULT

  public increaseBy(value: number): void {
    this.counter += value
  }

  public reset(): void {
    this.counter = CounterComponent.DEFAULT
  }

}
