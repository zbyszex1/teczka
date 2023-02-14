import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Odometer from 'odometer';

@Component({
  selector: 'app-odometer',
  templateUrl: './odometer.component.html',
  styleUrls: ['./odometer.component.scss']
})
export class OdometerComponent {

  constructor() {
    this.odometerElemRef = {} as ElementRef;
    this.value = 0;
    this.label = '';
  }
  @Input()
  value: number;

  @Input()
  label: string;

  @ViewChild('odometerElemRef', {read: ElementRef})
  odometerElemRef: ElementRef;

  ngAfterViewInit() {
    const odometer = new Odometer({
      el: this.odometerElemRef.nativeElement,
      value: 100
    })
    odometer.update(this.value);
  }
}
