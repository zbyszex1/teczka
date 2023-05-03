import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor() {
    this.open = false;    
    this.ariaI = false;
    this.ariaII = false;
    this.ariaIII = false;
  }

  open: boolean;
  ariaI: boolean;
  ariaII: boolean;
  ariaIII: boolean;

  ngOnInit() {

  }

  onClick() {
    this.open = false;
    this.ariaI = false;
    this.ariaII = false;
    this.ariaIII = false;
  }

  onDropdownI(): void {
    this.ariaI = !this.ariaI;
    this.ariaII = false;
    this.ariaIII = false;
  }

  onDropdownII(): void {
    this.ariaI = false;
    this.ariaII = !this.ariaII;
    this.ariaIII = false;
  }

  onDropdownIII(): void {
    this.ariaI = false;
    this.ariaII = false;
    this.ariaIII = !this.ariaIII;
  }
}
