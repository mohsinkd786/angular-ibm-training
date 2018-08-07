import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appFooter]'
})
export class FooterDirective {

  constructor(Element : ElementRef) {
	console.log('Footer Directive');
	Element.nativeElement.innerHTML = "<span><u>Footer Element</u> </span>";
   }

}
