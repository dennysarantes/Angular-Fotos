import { UserService } from './../../services/user/user.service';
import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[CheckOwnerPhoto]'
})
export class CheckOwnerPhotoDirective implements OnInit{

  @Input() photoUserId! : number;

  constructor(private userService: UserService,
              private element : ElementRef<any>,
              private renderer : Renderer2) { }

  ngOnInit(): void {
    this.verificaSeEhDonoDaPhoto();
  }

  verificaSeEhDonoDaPhoto(){
      if(!this.photoUserId || this.photoUserId != this.userService.getUserId()){
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none')
        //Se o usuário não for o dono da foto, então o botão de deletar não será mostrado.
      }
  }
}
