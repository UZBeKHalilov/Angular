import { Component } from '@angular/core';
import { Form, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson-5',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './lesson-5.component.html',
  styleUrl: './lesson-5.component.scss'
})
export class Lesson5Component {
  onSubmit(form: any) {
    console.log(form.value); // { name: "input value" } }
  }

  
  form: any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ name: [''] });
  }
  
  onSubmit2() {console.log(this.form.value); } // { name: "input value" }

}
