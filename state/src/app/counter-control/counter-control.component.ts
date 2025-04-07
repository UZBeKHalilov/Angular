import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-control',
  imports: [],
  templateUrl: './counter-control.component.html',
  styleUrl: './counter-control.component.scss'
})
export class CounterControlComponent {
  constructor(private counterService: CounterService) { }
    
  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  reset(): void {
    this.counterService.reset();
  }
}
