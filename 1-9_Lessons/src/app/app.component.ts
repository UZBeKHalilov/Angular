import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
@Component({
  selector: 'app-root',
  imports: [NavigatorComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1-9_Lessons';
}
