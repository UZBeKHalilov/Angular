import { Routes } from '@angular/router';
import {MyComponentComponent} from '../app/my-component/my-component.component'
import { HelloComponent } from './hello/hello.component';
import { Lesson4Component } from './lesson-4/lesson-4.component';
import { Lesson5Component } from './lesson-5/lesson-5.component';
import { Lesson6Component } from './lesson-6/lesson-6.component';
import { Lesson7Component } from './lesson-7/lesson-7.component';
import { Lesson8Component } from './lesson-8/lesson-8.component';
import { Lesson9Component } from './lesson-9/lesson-9.component';
// import { CounterComponent } from './counter/counter.component';
import { StateComponent } from './state/state.component';

export const routes: Routes = [
    { path: '', component: MyComponentComponent },
    { path: '3', component: HelloComponent },
    { path: '4', component: Lesson4Component },
    { path: '5', component: Lesson5Component },
    { path: '6', component: Lesson6Component },
    { path: '7', component: Lesson7Component },
    { path: '8', component: Lesson8Component },
    { path: '9', component: Lesson9Component },
    { path: 'State', component: StateComponent },
    // { path: 'Ngrx', component: CounterComponent },

    { path: '**', redirectTo: ''} // Redirect to home for any unknown routes
];

