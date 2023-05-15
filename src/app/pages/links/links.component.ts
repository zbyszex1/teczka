import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent  implements OnInit  {

  public http: HttpClient
  public classes: Class[];
  public personsReady: boolean;
  public personId: number;
  public persons: Person[];
  public indexes: Index[];
  public indexesBase: Index[];
  public masterData: Index;
  public filter: boolean;
  public sortN: boolean;
  public html: string;
  public message: string;
  public loading: boolean;
  public ready: boolean;
  // public indexes: Index[];
  public dataAlpha: Index[];
  public dataNum: Index[];
  public bPz: boolean;
  public bOp: boolean;
  public bSb: boolean;
  public bTw: boolean;
  public bIt: boolean;
  public sheet;

  constructor(
    // private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.http = httpClient;
    this.html = '';
    this.classes = [ {id:1, name: 'PZ'}, {id:2, name: 'OP'}, {id:3, name: 'SB'}, {id:4, name: 'TW'}, {id:5, name: 'IT'}, ]
    this.personsReady = false;
    this.personId = 0;
    this.persons = [];
    this.indexes = [];
    this.indexesBase = [];
    this.masterData = new Index();
    this.filter = false;
    this.sortN = false;
    this.message = '';
    this.loading = false;
    this.ready = false;
    this.dataAlpha = [];
    this.dataNum = [];
    this.indexes = [];
    this.bPz = true;
    this.bOp = true;
    this.bSb = true;
    this.bTw = true;
    this.bIt = true;
    this.selsa = {} as ElementRef;
    this.selpz = {} as ElementRef;
    this.selop = {} as ElementRef;
    this.selsb = {} as ElementRef;
    this.seltw = {} as ElementRef;
    this.selit = {} as ElementRef;
    this.sheet = new CSSStyleSheet();
  }
  @ViewChild('selsa') selsa: ElementRef;
  @ViewChild('selpz') selpz: ElementRef;
  @ViewChild('selop') selop: ElementRef;
  @ViewChild('selsb') selsb: ElementRef;
  @ViewChild('seltw') seltw: ElementRef;
  @ViewChild('selit') selit: ElementRef;

  ngOnInit(): void {
    this.ready = false;
    this.loading = true;
    this.setCss();
    this.http.get<Index[]>('assets/json/indeks.json')
    .subscribe({
      next: (data) => { 
        this.indexesBase = data;
        this.copyIndexes();
        let idx = 1;
        this.indexes.forEach( indeks => {
          let person = {id: indeks.personId, name: this.getPerson(indeks) };
          this.persons.push(person);
        })
        this.personsReady = true;
        data.forEach(element => {
          element.name = element.name.replaceAll('_', ' ');
        })
      },
      error: (error) => { 
        console.log(error.message);
        this.message = 'Niespodziewany błąd: ' + (error.message);
       },
      complete: () => { this.loading = false; }
    })
  }

  getPerson(indeks: Index) {
    let result: string = '';
    const className = indeks.class;
    switch(className ) {
      case "IT":
        result += '\xa0\xa0\xa0\xa0';
        break;
      case "TW":
        result += '\xa0';
        break;
      case "SB":
        result += '\xa0\xa0\xa0';
        break;
      case "OP":
        result += '\xa0\xa0\xa0';
        break;
      default:
        result += '\xa0\xa0\xa0';
        break;
    }
    while (indeks.name.indexOf('_') > 0)
      indeks.name = indeks.name.replace('_', ' ')
    // return className + result + indeks.name;
    return indeks.name;
  }

  onPerson(event: any) {
    this.personId = event;
  }

  fillZeros(val: number) {
    let i_str = val.toString();
    if (val <= 99)
      i_str = '0' + i_str;
    if (val <= 9)
      i_str = '0' + i_str;
    return i_str;
  }

  findLinks(master:number, person:number) {
    const personData: Index = this.indexes[person];
    personData.count = 0;
    let uIdx = personData.units.length;
    while ( --uIdx >= 0) {
      const un: string = personData.units[uIdx].display;
      const pages: number[] = personData.units[uIdx].pages;
      const su = this.masterData.units.find( u => u.display == un);
      if (su != null && !un.startsWith('intern')) {
        let pIdx = personData.units[uIdx].pages.length;
        let lc = 0;
        while ( --pIdx >= 0) {
          const lp = personData.units[uIdx].pages[pIdx];
          const sp = su.pages.find( p => p == lp);
          if(sp == undefined) {
            personData.units[uIdx].pages.splice(pIdx,1);
          } else {
            lc++;
          }
        }
        if (lc > 0) {
          personData.count += lc;
        } else {
          personData.units.splice(uIdx,1);
        }
      } else {
        personData.units.splice(uIdx,1);
      }
    }
  }

  findMasterIdx() {
    let idx = 0;
    let master = 0;
    this.indexes.every( indeks => {
      if (indeks.personId == this.personId) {
        master = idx;
        return false;
      }
      idx++;
      // console.log(indeks.personId +' '+indeks.name)
      return true;
    })
    return master;
  }

  copyIndexes() {
    this.indexes = [];
    this.indexesBase.forEach( bi => {
      this.indexes.push(this.copyIndex(bi, true),);
    })
  }

  copyIndex(sIndex: Index, filter: boolean) {
    const index = new Index();
    index.name = sIndex.name;
    index.personId = sIndex.personId;
    index.count = sIndex.count;
    index.class = sIndex.class;
    index.units = [];
    sIndex.units.forEach( bu => {
      const unit = new Unit();
      unit.display = bu.display;
      unit.path = bu.path;
      unit.pages = [];
      bu.pages.forEach(bp => {
        unit.pages.push(bp)
      })
      if ((index.name != "Sarata Zbigniew" && index.name != "Sarata Aleksandra") || !this.filter || !filter)
        index.units.push(unit);
    })
    return index;
  }

  resetFilter() {
    this.filter = false;
    this.setPerson();
  }

  setFilter() {
    this.filter = true;
    this.setPerson();
  }
  
  setPerson() {
    this.copyIndexes();
    let master = this.findMasterIdx();
    this.masterData = this.copyIndex(this.indexesBase[master], false);
    console.log(this.masterData)
    let idx = this.indexes.length;
    while (--idx >= 0) {
      if (idx != master ) {
        this.findLinks(master, idx);
        if (this.indexes[idx].count==0)
          this.indexes.splice(idx,1);
      } else {
        this.indexes.splice(idx,1);
      }
    }
    if (this.sortN)
      this.sortNum();
    else
      this.sortAlpha();
    this.ready = true;
  }

  sortAlpha() {
    this.sortN = false;
    this.indexes.sort(this.compareAlpha);
    document.getElementById('sortNum')?.classList.remove('sort-inactive');
    document.getElementById('sortAlpha')?.classList.remove('sort-active');
    document.getElementById('sortNum')?.classList.add('sort-active');
    document.getElementById('sortAlpha')?.classList.add('sort-inactive');
  }

  sortNum() {
    this.sortN = true;
    this.indexes.sort(this.compareNum);
    document.getElementById('sortAlpha')?.classList.remove('sort-inactive');
    document.getElementById('sortNum')?.classList.remove('sort-active');
    document.getElementById('sortAlpha')?.classList.add('sort-active');
    document.getElementById('sortNum')?.classList.add('sort-inactive');
    // this.indexes = this.indexes.sort((a,b) => b.count - a.count);
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

  selSa() {
    const selSa: HTMLImageElement = this.selsa.nativeElement;
    this.filter = this.switchCb(selSa);
    this.setCss();
  }

  selPz() {
    const selPz: HTMLImageElement = this.selpz.nativeElement;
    console.log(selPz)
    this.bPz = this.switchCb(selPz);
    this.setCss();
    console.log(selPz)
  }

  selOp() {
    const selOp: HTMLImageElement = this.selop.nativeElement;
    this.bOp = this.switchCb(selOp);
    this.setCss();
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
    style += '.PZ ' + (this.bPz ? '{} ' : '{display: none;} '); 
    style += '.OP ' + (this.bOp ? '{} ' : '{display: none;} '); 
    style += '.SB ' + (this.bSb ? '{} ' : '{display: none;} '); 
    style += '.TW ' + (this.bTw ? '{} ' : '{display: none;} '); 
    style += '.IT ' + (this.bIt ? '{} ' : '{display: none;} '); 
    this.sheet.replaceSync(style);
    document.adoptedStyleSheets = [this.sheet];
}
}

interface Person {
  id: number;
  name: string;
}

interface Class {
  id: number;
  name: string;
}
class Index {
  name: string = '';
  personId: number = 0;
  class: string = '';
  count: number = 0;
  units: Unit[] = [];
}

class Unit {
  display: string = '';
  path: string = '';
  pages: number[] = [];
}
