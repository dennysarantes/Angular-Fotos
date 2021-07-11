import { UserService } from './../../user/user.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

  usuarioLogado = false;
  //userName = '';

  constructor(private userService : UserService
              ,private router : Router){
    this.usuarioLogado = userService.usuarioEstaLogado();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //throw new Error('Method not implemented.');
    if(this.usuarioLogado){
      // Usuário já logado tentando entrar na página de login!
      this.router.navigate(['user', this.userService.getUserName()]);
      return false;
    } else{
      //Usuário não logado tentando acessar a tela
      console.log('ok, usuario não logado')
      return true;
    }
  }



}
