import { Component } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {

}
