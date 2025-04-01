import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-control',
  standalone: true,
  imports: [], // No additional imports needed here
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss']
})
export class CounterControlComponent {
  constructor(private counterService: CounterService) {}

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