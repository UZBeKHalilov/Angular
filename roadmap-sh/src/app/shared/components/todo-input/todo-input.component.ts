import { Component, inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  imports: [],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  private todoService = inject(TodoService);

  addTodo(todo: string) {
    if (todo.trim()) {
      this.todoService.addTodo(todo.trim());
    }
  }
}
