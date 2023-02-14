import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSlideIn]',
  exportAs: 'slideIn'
})
export class SlideInDirective {

  _elem: ElementRef<HTMLHtmlElement>;
  handler: any;
  
  @Input()
  delay: number;
  
  @Input('appSlideIn')
  @HostBinding('class')
  direction: string;

  @HostBinding('class.slideIn')
  slideIn: boolean;

  @HostBinding('class.animate')
  anima: boolean;

  constructor(private elem: ElementRef<HTMLHtmlElement>) {
    this._elem = elem;
    this.handler = null;
    this.direction = 'left';
    this.slideIn = true;
    this.anima = false;
    this.delay = 500;
  }

  ngOnInit(): void {
    this.handler = setTimeout(() => {
      this.anima = true;
    }, this.delay)

  }

  ngOnDestroy(): void {
    clearTimeout(this.handler);
  }
}
