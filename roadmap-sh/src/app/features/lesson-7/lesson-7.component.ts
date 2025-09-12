import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson7Service } from '../../services/lesson-7.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lesson-7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lesson-7.component.html',
  styleUrl: './lesson-7.component.scss'
})

export class Lesson7Component {
  tasks$: Observable<any[]>; // Corrected type

  newTask = '';

  constructor(private taskService: Lesson7Service) {
    this.tasks$ = this.taskService.getTasks(); // Fetch tasks on initialization
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask).subscribe({
        next: () => {
          this.tasks$ = this.taskService.getTasks(); // Refresh tasks
          this.newTask = ''; // Clear input
        },
        error: (err) => console.error('Error adding task:', err) // Handle errors
      });
    }
  }

  // updateTask(id: string, task: string) { // Changed id type to string
  //   this.taskService.updateTask(id, task).subscribe({
  //     next: () => {
  //       this.tasks$ = this.taskService.getTasks(); // Refresh tasks
  //     },
  //     error: (err) => console.error('Error updating task:', err) // Handle errors
  //   });
  // }

  // deleteTask(id: string) { // Changed id type to string
  //   this.taskService.deleteTask(id).subscribe({
  //     next: () => {
  //       this.tasks$ = this.taskService.getTasks(); // Refresh tasks
  //     },
  //     error: (err) => console.error('Error deleting task:', err) // Handle errors
  //   });
  // }
}