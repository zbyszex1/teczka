import { Component } from '@angular/core';

@Component({
  selector: 'app-tom2',
  templateUrl: './tom2.component.html',
  styleUrls: ['./tom2.component.scss']
})
export class Tom2Component {
  title: string;
  description: string;
  path: string;
  count: string;

  constructor() {
    this.title ="";
    this.description = '';
    this.path = '';
    this.count = '1';
  }

  ngOnInit(): void {
  }

}

