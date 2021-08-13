import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSadaDirective]'
})
export class SadaDirectiveDirective implements OnInit {

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
   this.element.nativeElement.style.color = "red"

  }

  

}
