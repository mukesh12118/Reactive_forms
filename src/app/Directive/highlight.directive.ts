import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = '';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
