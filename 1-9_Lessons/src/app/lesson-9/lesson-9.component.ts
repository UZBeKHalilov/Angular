import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-lesson-9',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './lesson-9.component.html',
  styleUrl: './lesson-9.component.scss'
})
export class Lesson9Component {
  isActive = true; // Adds 'active' class
  textColor = 'blue';
  isVisible = true;
  items = ['A', 'B', 'C'];

  isBold = true;

  show = false;
  toggle() { this.show = !this.show; }

  tasks = ['Learn Directives', 'Build App'];

  visible = false;

  taskColor = 'blue';
}
