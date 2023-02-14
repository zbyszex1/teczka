import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor() {
    this.open = false;    
    this.ariaO = false;
    this.ariaI = false;
  }

  open: boolean;
  ariaO: boolean;
  ariaI: boolean;

  ngOnInit() {

  }

  onDropdownO(): void {
    this.ariaO = !this.ariaO;
    this.ariaI = false;
  }

  onDropdownI(): void {
    this.ariaO = false;
    this.ariaI = !this.ariaI;
  }
}
