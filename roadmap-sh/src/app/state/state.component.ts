import { Component } from '@angular/core';
import { TodoInputComponent } from '../shared/components/todo-input/todo-input.component';
import { TodoListComponent } from '../shared/components/todo-list/todo-list.component';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {

}
