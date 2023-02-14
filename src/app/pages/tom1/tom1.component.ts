import { Component } from '@angular/core';

@Component({
  selector: 'app-tom1',
  templateUrl: './tom1.component.html',
  styleUrls: ['./tom1.component.scss']
})
export class Tom1Component {
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

