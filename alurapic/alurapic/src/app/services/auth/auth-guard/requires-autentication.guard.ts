import { UserService } from './../../user/user.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class RequiresAutenticationGuard implements CanActivate{

  usuarioLogado : boolean = false;
  //userName = '';

  constructor(private userService : UserService
              ,private router : Router){
    this.usuarioLogado = userService.usuarioEstaLogado();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.userService.usuarioEstaLogado()){
      //Qualquer usuário não logado será redirecionado para a tela de login.
      this.router.navigate([''],
      {
        queryParams: {
          fromUrl: state.url //grava a Url que o usuário tentou acessar sem estar logado
        }
      });
      return false;
    } else{
      return true;
    }
  }



}
