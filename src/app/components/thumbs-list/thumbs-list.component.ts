import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { Common } from '../../classes/common';
import { JsonPathDirective } from 'src/app/directives/json-path.directive';
// import * as FileSaver from 'file-saver';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-thumbs-list',
  templateUrl: './thumbs-list.component.html',
  styleUrls: ['./thumbs-list.component.scss']
})
export class ThumbsListComponent implements OnInit{
  @Input() path: string;
  @Input() jsonPath: string;
  numbers: string[];
  loading: boolean;
  message: string;
  json: any;
  timer: any;
  zoomed: HTMLHtmlElement | null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.path = '';
    this.jsonPath = '';
    this.numbers = new Array<string>();
    this.loading = false;
    this.path = ''
    this.message = '';
    this.json = {};
    this.timer = null;
    this.zoomed = null;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    switch (event.key) {
      case 'q':
      case 'Q':
        this.toHome();
        break;
      case 'w':
      case 'W':
        this.toTop();
        break;
      case 'z':
      case 'Z':
        this.toBottom();
        break;
      default:
        break;                                                                                                                          }
  }
  
 ngOnInit(): void {
    const fragment = this.route.snapshot.fragment;
    const els = document.getElementsByClassName('thumb-outher');
console.log('/assets/json/' +this.jsonPath + '.json');
    this.http.get('/assets/json/' +this.jsonPath + '.json')
    .subscribe({
      next: (data) => { 
        this.json = data;
        this.numbers = Common.FillNumbers(this.json.min, this.json.max);
        if (fragment != null && fragment != undefined)
        {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element != null) {
              element.scrollIntoView({behavior: 'smooth'});
            }
          }, 500);
        }
        },
      error: (error) => { this.message = 'niespodziewany błąd: ' + (error.statusText); },
      complete: () => { this.loading = false; }
    })
  }

  toHome(): void {
    window.open('/', '_self');
  }
  
  toTop(): void {
    const element = document.getElementById('t');
    if (element != null) {
      element.scrollIntoView({behavior: 'smooth'});
    }
}
  
  toBottom(): void {
    const element = document.getElementById('b');
    if (element != null) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
  
  mouseEnter(event: any): void {
    this.timer = setTimeout(() => {
      this.zoomed = event.srcElement as HTMLHtmlElement;
      this.zoomed.classList.add('thumb-zoom')
    }, 500)
  }

  mouseLeave(event: any): void {
    if(this.timer!=null) {
      clearTimeout(this.timer);
      this.timer = null;
    } 
    if (this.zoomed != null) {
      this.zoomed.classList.remove('thumb-zoom')
      this.zoomed = null;
    }
  }

  downloadPdf(): void {
    const pdfPath = this.json.pdf;
    if (pdfPath != null) {
      const n = pdfPath.lastIndexOf('/');
      if (n > 0) {
        const pdfName = pdfPath.substring(n + 1);
        FileSaver.saveAs(pdfPath, pdfName);
      }
    }
  }

}
