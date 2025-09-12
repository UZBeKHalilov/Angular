import { Component, inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  private todoService = inject(TodoService); 
  todos = this.todoService.getTodos();
 
  removeTodo(index: number) { 
    this.todoService.removeTodo(index); 
  }
}
