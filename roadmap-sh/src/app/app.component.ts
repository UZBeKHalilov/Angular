import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigatorComponent } from './layouts/navigation/navigator.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigatorComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Roadmap';
}
