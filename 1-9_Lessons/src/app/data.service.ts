import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 getData(){
   return ['item 1', 'item 2', 'item 3'];
 }
}
