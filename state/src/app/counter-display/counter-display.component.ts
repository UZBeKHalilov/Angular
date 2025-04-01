import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common'; // For async pipe
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [AsyncPipe], // Import AsyncPipe for the template
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent {
  constructor(public counterService: CounterService) {} // Inject the service
}