import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: '[appWhenVisible]',
  exportAs: 'whenVisible'
})
export class WhenVisibleDirective {

  constructor(
    private elem: ElementRef<HTMLElement>
  ) {
    this.isVisible = false;
    this.wasVisible = false;
    this.threshold = 0.3;
    this.observer = new IntersectionObserver(console.log);
   }

  private observer: IntersectionObserver;
  
  @HostBinding('class.is-visible')
  isVisible: boolean;

  @HostBinding('class.was-visible')
  wasVisible: boolean;

  @Input()
  threshold: number;

  @Output()
  visibilityChange = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((results) => {
      results.forEach(result => {
        if (this.elem.nativeElement !== result.target) {
          return
        }
        this.isVisible = result.isIntersecting
        this.wasVisible = this.wasVisible || result.isIntersecting
        this.visibilityChange.emit(this.isVisible)
      })
    }, {
      root:document.body,
      threshold: this.threshold
    })

    this.observer.observe(this.elem.nativeElement)
  }


  ngOnDestroy() {
    this.observer.disconnect();
  }
}
