import { Component } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent, CounterComponent],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {

}
