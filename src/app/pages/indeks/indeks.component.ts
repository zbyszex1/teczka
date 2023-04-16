import { Component, OnInit } from '@angular/core';
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

  constructor(
    // private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.http = httpClient;
    this.html = '';
    this.message = '';
    this.loading = false;
    this.ready = false;
    this.indexes = [];
  }

  ngOnInit(): void {
    console.log('onInit()')
    this.ready = false;
    this.http.get<Index[]>('assets/json/indeks.json')
    .subscribe({
      next: (data) => { 
        // this.html = data;
        this.indexes = data;
        console.log(data)
        this.convert();
        // setTimeout(() => {
        //   this.onResize(this);
        // }, 100)
        this.ready = true;
      },
      error: (error) => { 
        console.log(error.message);
        this.message = 'Niespodziewany błąd: ' + (error.message);
       },
      complete: () => { this.loading = false; }
    })
  }

  convert() {
    this.indexes.forEach(index => {
      this.html +='<div>\n<b>' + index.name + '&nbsp;&nbsp;</b>\n';
      index.units.forEach(unit => {
        this.html += '&nbsp;&nbsp;' + unit.display;
        unit.pages.forEach((page, i) => {
          this.html += (i==0) ? ': ' : ',\n&nbsp;&nbsp;&nbsp;&nbsp;';
          this.html +='<a href="' + unit.path +'/' +this.fillZeros(page) + '" target="_blank"><b>' + page + '</b></a>';
        });
        this.html += '\n';
      });
      this.html += '</div>';
    })
  }

  fillZeros(val: number) {
    let i_str = val.toString();
    if (val <= 99)
      i_str = '0' + i_str;
    if (val <= 9)
      i_str = '0' + i_str;
    return i_str;
  }

}

interface Index {
  name: string;
  units: Unit[];
}

interface Unit {
  display: string;
  path: string;
  pages: number[];
}
