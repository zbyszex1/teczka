import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss']
})
export class PagesListComponent {
  @Input() path: string;
  @Input() pages: string;
  numbers: string[];
  
  constructor() {
    this.path = '';
    this.pages = '';
    this.numbers = new Array<string>();
    this.numbers[0] = 'any';
  }

  ngOnInit(): void {
    this.pages = this.pages.replaceAll(' ', '');
    this.numbers = this.pages.split(',');
    let count = this.numbers.length;
    for(let i=0; i<count; i++) {
      while (this.numbers[i].length < 3)
      this.numbers[i] = '0' + this.numbers[i];
    }
  }

}
