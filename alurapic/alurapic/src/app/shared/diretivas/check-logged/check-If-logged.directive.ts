import { User } from './../../../services/user/model/user';
import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Directive({
  selector: '[Check-If-Logged]'
})
export class CheckIfLoggedDirective implements OnInit{

  currentDisplay! : string;

  constructor(private userService: UserService,
              private element : ElementRef<any>,
              private renderer : Renderer2) { }

  ngOnInit(): void {
    //Esse método consegue pegar todo o estilo css aplicado ao elemento que usou a diretiva
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display

    this.userService.getUser()
    .subscribe(user => {
      if(user){
        this.renderer.setStyle(this.element.nativeElement, 'display', this.currentDisplay)
      }else{
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none')
      }
    })
  }

}
