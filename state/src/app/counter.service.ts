import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  public count$ = this.counterSubject.asObservable();

  constructor() { }

  increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement(): void {
    const currentValue = this.counterSubject.value;
    if (currentValue > 0) {
      this.counterSubject.next(currentValue - 1);
    }
  }

  reset(): void {
    this.counterSubject.next(0);
  }
}
