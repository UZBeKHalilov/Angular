import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = ['Learn Angular', 'Build App'];

  getTasks() {

    return this.tasks;

  }

  addTask(task: string) {

    this.tasks.push(task);

  }
}
