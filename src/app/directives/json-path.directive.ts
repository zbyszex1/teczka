import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appJsonPath]'
})
export class JsonPathDirective {

  @Input()
  path: string;

  _elem: ElementRef<HTMLHtmlElement>;
  handler: any;
  

  constructor(
    private elem: ElementRef<HTMLHtmlElement>) {
      this._elem = elem;
      this.path = '';
     }

}
