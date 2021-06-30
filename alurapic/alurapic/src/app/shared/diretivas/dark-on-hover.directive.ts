import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkOnHover]'
})
export class DarkOnHoverDirective {

  @Input() brightness = '70%'


  constructor(
        private elementoDOM : ElementRef
        ,private render: Renderer2) { }

  @HostListener('mouseover')
  darkenOn(){
      console.log('tá com o mouse')
      this.render.setStyle(this.elementoDOM.nativeElement, 'filter', `brightness(${this.brightness})`)
  }

  @HostListener('mouseleave')
  darkenOff(){
    console.log('tirou o mouse')
    this.render.setStyle(this.elementoDOM.nativeElement, 'filter', 'brightness(100%)')
  }
}
