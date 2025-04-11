import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';
import { addTodo, removeTodo, toggleTodo } from '../todo.actions';
import { selectAll, TodoState, } from '../todo.reducer';
import { loadTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
  todos$: Observable<Todo[]>;
  constructor(private store: Store<{ todos: TodoState }>) {
    this.todos$ = this.store.select(state => selectAll(state.todos));
    this.store.dispatch(loadTodos()); // Load todos on init
  }
  addTodo(description: string) {
    const todo: Todo = {
      id: Date.now().toString(),
      description,
      completed: false
    };
    this.store.dispatch(addTodo({ todo }));
  }


  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: string) {
    this.store.dispatch(toggleTodo({ id }));
  }

  
}