import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

 constructor(Element : ElementRef) {
	console.log('Header Directive')
	Element.nativeElement.innerHTML="<i>Hello</i> \t"
	}
}
