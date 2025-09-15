import { Routes } from '@angular/router';
import { MyComponentComponent } from './features/my-component/my-component.component';
import { HelloComponent } from './features/hello/hello.component';
import { Lesson4Component } from './features/lesson-4/lesson-4.component';
import { Lesson5Component } from './features/lesson-5/lesson-5.component';
import { Lesson6Component } from './features/lesson-6/lesson-6.component';
import { Lesson7Component } from './features/lesson-7/lesson-7.component';
import { Lesson8Component } from './features/lesson-8/lesson-8.component';
import { Lesson9Component } from './features/lesson-9/lesson-9.component';
import { CounterComponent } from './features/counter/counter.component';
import { StateComponent } from './state/state.component';
import { HomeComponent } from './layouts/home/home.component';

export const routes: Routes = [
    // Home / Landing
    { path: '', component: HomeComponent },

    // Lesson group (1-9) - legacy numeric routes redirect to descriptive paths
    { path: 'intro', component: MyComponentComponent },
    { path: 'components', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'templates', component: HelloComponent },
    { path: 'services', component: Lesson4Component },
    { path: 'forms', component: Lesson5Component },
    { path: 'routing', component: Lesson6Component },
    { path: 'http', component: Lesson7Component },
    { path: 'pipes', component: Lesson8Component },
    { path: 'directives', component: Lesson9Component },

    // State management
    { path: 'state-management', component: StateComponent },
    { path: 'counter', component: CounterComponent },

    // Backwards compatibility: numeric routes
    { path: '3', redirectTo: 'templates', pathMatch: 'full' },
    { path: '4', redirectTo: 'services', pathMatch: 'full' },
    { path: '5', redirectTo: 'forms', pathMatch: 'full' },
    { path: '6', redirectTo: 'routing', pathMatch: 'full' },
    { path: '7', redirectTo: 'http', pathMatch: 'full' },
    { path: '8', redirectTo: 'pipes', pathMatch: 'full' },
    { path: '9', redirectTo: 'directives', pathMatch: 'full' },

    // Wildcard — redirect to home
    { path: '**', redirectTo: '' }
];

