import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = signal(0);

  constructor() {
  effect(() => {
  console.log(`The count is now ${this.count()}`); 
  });
  }
 
  increment() {
    this.count.update(value => value + 1); 
  }
}
