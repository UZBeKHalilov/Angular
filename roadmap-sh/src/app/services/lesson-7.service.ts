import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Lesson7Service {

  private url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<string[]>(this.url).pipe(
        catchError(() => of([])) // Fallback to empty array
    );
  }

  addTask(task: string) { 
    return this.http.post(this.url, { task }); 
  }

  updateTask(id: number, task: string) { return this.http.put(`${this.url}/${id}`, { task }); }
  
  deleteTask(id: number) { return this.http.delete(`${this.url}/${id}`); }

}
