import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-counter-display',
  imports: [AsyncPipe],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss'
})
export class CounterDisplayComponent {
  constructor(public counterService: CounterService) { }
}
