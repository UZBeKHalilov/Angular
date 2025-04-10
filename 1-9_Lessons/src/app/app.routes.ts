import { Routes } from '@angular/router';
import {MyComponentComponent} from '../app/my-component/my-component.component'
import { HelloComponent } from './hello/hello.component';
import { Lesson4Component } from './lesson-4/lesson-4.component';
import { Lesson5Component } from './lesson-5/lesson-5.component';
import { Lesson6Component } from './lesson-6/lesson-6.component';


export const routes: Routes = [
    { path: '', component: MyComponentComponent },
    { path: '3', component: HelloComponent },
    { path: '4', component: Lesson4Component },
    { path: '5', component: Lesson5Component },
    { path: '6', component: Lesson6Component },
    { path: '**', redirectTo: ''} // Redirect to home for any unknown routes
];

