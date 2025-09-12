import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-my-component',
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent implements OnInit, OnDestroy {
  items: string[];
  constructor(private dataService: DataService) {
    this.items = this.dataService.getData();
  }

  message:string= '';

  ngOnInit(): void {
    this.message = 'Component Initialized!';
  }

  ngOnDestroy(): void {
    console.log('Component Destroyed!');
  }
}
