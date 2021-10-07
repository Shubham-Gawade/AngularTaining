import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elementRef : ElementRef) { }

  @Input() appCustom : string ="";

  @HostListener('mouseenter') mouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.elementRef.nativeElement.style.backgroundColor = this.appCustom;
  }

  @HostListener('mouseleave') mouseOut() {
    this.elementRef.nativeElement.style.fontWeight = "normal";
    this.elementRef.nativeElement.style.backgroundColor = "initial";
  }
}

//ngStyle ngClass
//pass funtion attribute