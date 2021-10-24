import { DetectorPlataformaService } from 'src/app/shared/plataforma/detector-plataforma.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[ImmediateClick]'
})
export class ImmediateClickDirective implements OnInit{

  constructor(
      private element : ElementRef<any>,
      private detectorPlataformaService : DetectorPlataformaService ){}
  ngOnInit(): void {
    if (this.detectorPlataformaService.ehNavegador()){
      this.element.nativeElement.click();
    }
  }

}
