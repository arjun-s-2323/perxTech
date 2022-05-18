import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @Input('fontSize') fontSize: string;
  constructor(private elRef: ElementRef) {
  }
  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.fontSize = this.fontSize;
  }
}
