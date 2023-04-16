import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { Common } from '../../classes/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  project: any;
  message: string;
  loading: boolean;

  header: string;
  description: string;
  path: string;
  page: string;
  ready: boolean;
  data: any;
  json: any;
  nPrev: string;
  nNext: string;
  bPrev: boolean;
  bNext: boolean;
  width0: number;
  height0: number;
  zoom: boolean;
  innerHeight: number;
  innerWidth: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.project = null;
    this.message = '';
    this.loading = false;
    this.header = '--';
    this.description = '--';
    this.path = '/'
    this.page = '';
    this.ready = false;
    this.data = {};
    this.json = {};
    this.nPrev = '1';
    this.nNext = '3';
    this.bPrev = false;
    this.bNext = false;
    this.width0 = 1;
    this.height0 = 1;
    this.zoom = false;
    this.innerHeight = innerHeight;
    this.innerWidth = innerWidth;
    // window.onresize = this.resize(event);
   }

   @HostListener('document:keypress', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent) { 
    switch (event.key) {
      case 'a':
      case 'A':
        this.toLeft();
        break;
      case 's':
      case 'S':
        this.toRight();
        break;
      case 'w':
      case 'W':
        this.toZoomIn();
        break;
      case 'z':
      case 'Z':
        this.toZoomOut();
        break;
      case 'e':
      case 'E':
        this.toList();
        break;
      case 'q':
      case 'Q':
        this.toHome();
        break;
      case 'x':
      case 'X':
        this.toPrint();
        break;
      default:
        break;                                                                                                                          }
   }
   
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pageNumber = (params.get('page_number'))
      let jname = '';
      let parentss = this.route.parent?.url;
      parentss?.forEach(parents => {
        parents.forEach(parent => {
          console.log(parent.path)
          if (parent.path.length > 1) {
            jname += parent + '.';
          }
        })
      })
      let urls = this.route.snapshot.url;
      for (let i=0; i< this.route.snapshot.url.length - 1; i++) {
        if (i > 0) {
          jname += '.';
        }
        jname += urls[i].path
      }
      console.log(jname)
      // if (urls.length > 0)
      //   jname = urls[0].path;
      // if (urls.length > 2)
      //   jname += '.' + urls[1].path;
      if (pageNumber !== null && typeof pageNumber !== undefined) {
        this.clearDimensions();
        this.http.get('/assets/json/' +jname + '.json')
        .subscribe({
          next: (data) => { 
            this.json = data;
            this.page = pageNumber;
            const num = parseInt(this.page);
            this.prevNext(num);
            // setTimeout(() => {
            //   this.onResize(this);
            // }, 100)
            this.ready = true;
          },
          error: (error) => { this.message = 'Niespodziewany błąd: ' + (error.statusText); },
          complete: () => { this.loading = false; }
        })
      }
      this.path += 'pages/';
    })
  }

  onResize(event: any): void {
    if (this.zoom) {
      return;
    }
    const cursorsAera = document.getElementById('cursors-aera');
    const navbar = document.getElementsByTagName('nav')[0].clientHeight;
    const grid = document.getElementsByClassName('grid-container')[0].clientHeight;
    const footer = document.getElementsByTagName('footer')[0].clientHeight
    const img = document.getElementById("pageImg");
    let result = Math.round(this.innerHeight - navbar - grid - footer);
    if(img != null)
    {
      let width = Math.round(this.width0 * result / this.height0);
      if (width > 450) {
        result = Math.round(result * 450 / width);
        width = 450;
      }
      img.style.width = width + "px";
      img.style.height = result + "px";
      img.style.visibility = "visible";
      if (cursorsAera != null) {
        cursorsAera.style.height = result + "px";
        cursorsAera.style.width = img.offsetWidth + "px";
        }
    } else {
      console.log('img is null')
    }
  }

  toLeft(): void {
    if (this.zoom) {
      this.toZoomOut();
    }
    if (this.bPrev) {
      this.clearDimensions();
      const pn = parseInt(this.page) - 1;
      this.page = String(pn).padStart(3, '0');
      this.prevNext(pn);
    }
  }

  toRight(): void {
    if (this.zoom) {
      this.toZoomOut();
    }
    if (this.bNext) {
      this.clearDimensions();
      const pn = parseInt(this.page) + 1;
      this.page = String(pn).padStart(3, '0');
      this.prevNext(pn);
    }
  }
  
  toHome(): void {
    window.open('/', '_self');
  }
  
  toList(): void {
    window.open(this.json.router + '#' + this.json.offset + this.page, '_self');
  }
  
  toZoomIn(): void {
    const img = document.getElementById("pageImg");
    if(img != null)
    {
      if (this.width0 > 1250) {
        const c = 1250 / this.width0;
        img.style.width = "1250px";
        img.style.height = Math.round(this.height0 * c) + "px";
      } else {
         img.style.width = this.width0 + "px";
         img.style.height = this.height0 + "px";
      }
    } else {
      console.log('img is null')
    }
    this.zoom = true;
  }
  
  toZoomOut(): void {
    this.zoom = false;
    this.onResize(this);
    setTimeout(() => {
      this.onResize(this);
    }, 500)
  }
  
  toPrint(): void {
    let oldHeight = this.innerHeight;
    let coof = Math.sqrt(this.height0 / 1800);
    this.innerHeight = 1100 * coof;
    if (this.innerWidth > 1200)
      this.innerWidth = 1200;
    this.onResize(this);
    window.print();
    this.innerHeight = oldHeight;
    this.onResize(this);
  }

  imgLoad(): void {
    const img = document.getElementById("pageImg");
    if(img != null) {
      this.width0 = img.clientWidth;
      this.height0 = img.clientHeight;
      this.onResize(null);
    }
  }

  prevNext(num: number) {
    this.nPrev = String(num-1).padStart(3, '0');
    this.nNext = String(num+1).padStart(3, '0');
    this.bPrev =  this.nPrev >= this.json.min;
    this.bNext =  this.nNext <= this.json.max;
  }

  clearDimensions(): void {
    const img = document.getElementById("pageImg");
    if(img != null)
    {
      img.style.width = "";
      img.style.height = "";
      img.style.visibility = "hidden";
    }
  }
}
