import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../reverse.pipe'; // Import the custom pipe
import { FilterTasksPipe } from '../filter-tasks.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson-8',
  standalone: true,
  imports: [CommonModule, ReversePipe, FilterTasksPipe, FormsModule],
  templateUrl: './lesson-8.component.html',
  styleUrls: ['./lesson-8.component.scss']
})
export class Lesson8Component {
  today = new Date();
  // dueDate = new Date('2025-03-01'); // "Saturday, March 1, 2025"
  dueDate = new Date();

  tasks = ['Learn Angular', 'Build App', 'Test Pipe'];
  query = '';
}
