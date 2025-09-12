import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hello',
  imports: [FormsModule, CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  name = "User"
  inputName: string = "Type here";
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHcQjPh-2q9K8LXMBR6bj99_gchxaSa4V8g&s';

  sayHello() {
    alert('Hello, Angular! From Lesson 3');
  }

  isVisible: boolean = false;

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  tasks = ['Learn Angular', 'Build App', 'Have Fun'];

// other
  newtasks: string[] = [];

  newTask = '';

  addTask() {

    if (this.newTask) {

      this.newtasks.push(this.newTask);

      this.newTask = '';

    }

  }
}
