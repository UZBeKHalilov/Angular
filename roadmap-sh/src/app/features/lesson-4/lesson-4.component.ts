import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-lesson-4',
  imports: [],
  templateUrl: './lesson-4.component.html',
  styleUrl: './lesson-4.component.scss'
})
export class Lesson4Component {

  tasks: string[] = [];
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
    
  }

  add(task: string) { 
    this.taskService.addTask(task); 
  }
}
