import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-indeks',
  templateUrl: './indeks.component.html',
  styleUrls: ['./indeks.component.scss']
})
export class IndeksComponent implements OnInit  {

  public http: HttpClient
  public html: string;
  public message: string;
  public loading: boolean;
  public ready: boolean;
  public indexes: Index[];
  public dataAlpha: Index[];
  public dataNum: Index[];
  public bSb: boolean;
  public bTw: boolean;
  public bOp: boolean;
  public bIt: boolean;
  public sheet;

  constructor(
    // private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.http = httpClient;
    this.html = '';
    this.message = '';
    this.loading = false;
    this.ready = false;
    this.dataAlpha = [];
    this.dataNum = [];
    this.indexes = [];
    this.bSb = true;
    this.bTw = true;
    this.bOp = true;
    this.bIt = true;
    this.selsb = {} as ElementRef;
    this.seltw = {} as ElementRef;
    this.selop = {} as ElementRef;
    this.selit = {} as ElementRef;
    this.sheet = new CSSStyleSheet();
  }
  @ViewChild('selsb') selsb: ElementRef;
  @ViewChild('seltw') seltw: ElementRef;
  @ViewChild('selop') selop: ElementRef;
  @ViewChild('selit') selit: ElementRef;

  ngOnInit(): void {
    console.log('onInit()')
    this.ready = false;
    this.setCss();
    this.http.get<Index[]>('assets/json/indeks.json')
    .subscribe({
      next: (data) => { 
        data.forEach(element => {
          element.name = element.name.replaceAll('_', ' ');
        })
        this.dataAlpha = data;
        this.indexes = this.dataAlpha;
        // this.dataNum = data;
        // this.dataNum = this.dataNum.sort((a,b) => b.count - a.count);
        // this.convert();
        this.ready = true;
      },
      error: (error) => { 
        console.log(error.message);
        this.message = 'Niespodziewany błąd: ' + (error.message);
       },
      complete: () => { this.loading = false; }
    })
  }

  sortAlpha() {
    this.indexes.sort(this.compareAlpha);
    document.getElementById('sortNum')?.classList.remove('sort-inactive');
    document.getElementById('sortAlpha')?.classList.remove('sort-active');
    document.getElementById('sortNum')?.classList.add('sort-active');
    document.getElementById('sortAlpha')?.classList.add('sort-inactive');
  }

  sortNum() {
    this.indexes.sort(this.compareNum);
    document.getElementById('sortAlpha')?.classList.remove('sort-inactive');
    document.getElementById('sortNum')?.classList.remove('sort-active');
    document.getElementById('sortAlpha')?.classList.add('sort-active');
    document.getElementById('sortNum')?.classList.add('sort-inactive');
    this.indexes = this.indexes.sort((a,b) => b.count - a.count);
  }

  compareAlpha( a: any, b: any ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  compareNum( a: any, b: any ) {
    if ( a.count < b.count ){
      return 1;
    }
    if ( a.count > b.count ){
      return -1;
    }
    return 0;
  }

  // convert() {
  //   this.indexes.forEach(index => {
  //     this.html +='<div>\n<b>' + index.name + '&nbsp;&nbsp;</b>\n';
  //     index.units.forEach(unit => {
  //       this.html += '&nbsp;&nbsp;' + unit.display;
  //       unit.pages.forEach((page, i) => {
  //         this.html += (i==0) ? ': ' : ',\n&nbsp;&nbsp;&nbsp;&nbsp;';
  //         this.html +='<a href="' + unit.path +'/' +this.fillZeros(page) + '" target="_blank"><b>' + page + '</b></a>';
  //       });
  //       this.html += '\n';
  //     });
  //     this.html += '</div>';
  //   })
  // }

  fillZeros(val: number) {
    let i_str = val.toString();
    if (val <= 99)
      i_str = '0' + i_str;
    if (val <= 9)
      i_str = '0' + i_str;
    return i_str;
  }

  selSb() {
    const selSb: HTMLImageElement = this.selsb.nativeElement;
    this.bSb = this.switchCb(selSb);
    this.setCss();
  }

  selTw() {
    const selTw: HTMLImageElement = this.seltw.nativeElement;
    this.bTw = this.switchCb(selTw);
    this.setCss();
  }

  selOp() {
    const selOp: HTMLImageElement = this.selop.nativeElement;
    this.bOp = this.switchCb(selOp);
    this.setCss();
  }

  selIt() {
    const selIt: HTMLImageElement = this.selit.nativeElement;
    this.bIt = this.switchCb(selIt);
    this.setCss();
  }

  switchCb(cbElm: HTMLImageElement) {
    const base = "http://teczka.sarata.pl/assets/img/";
    let b = cbElm.src.toLowerCase().includes('cb-on.svg');
    b = !b;
    cbElm.src = base + (b ? "cb-on.svg" : "cb-off.svg");
    return b;
  }

  setCss() {
    let style = '';
    style += '.SB ' + (this.bSb ? '{} ' : '{display: none;} '); 
    style += '.TW ' + (this.bTw ? '{} ' : '{display: none;} '); 
    style += '.OP ' + (this.bOp ? '{} ' : '{display: none;} '); 
    style += '.IT ' + (this.bIt ? '{} ' : '{display: none;} '); 
    this.sheet.replaceSync(style);
    document.adoptedStyleSheets = [this.sheet];
}
}

interface Index {
  name: string;
  class: string;
  count: number;
  units: Unit[];
}

interface Unit {
  display: string;
  path: string;
  pages: number[];
}
