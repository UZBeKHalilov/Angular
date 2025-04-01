import { Component } from '@angular/core';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterControlComponent } from './counter-control/counter-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterDisplayComponent, CounterControlComponent], // Import standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}