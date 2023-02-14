import { Component, OnInit } from '@angular/core';
import { SlideInDirective } from 'src/app/directives/slide-in.directive';
import { PagesListComponent } from 'src/app/components/pages-list/pages-list.component';
// import {
//   animate,
//   state,
//   style,
//   transition,
//   trigger
// } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  isOpen: Boolean;

  readmore: boolean;

  readmore2: boolean;

  currentTab: string;

  handler: any;

  constructor() {
    this.readmore = false;
    this.readmore2 = false;
    this.isOpen = true;
    this.currentTab = '';
    this.handler = null;
  }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
  }

  readMore() {
    this.readmore = !this.readmore;
    setTimeout(() => {
      this.readmore2 = this.readmore;
    }, 250)
    setTimeout(() => {
      const element = document.getElementById("bottom");
      if (element != null) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }, 300);

  }
  
}
