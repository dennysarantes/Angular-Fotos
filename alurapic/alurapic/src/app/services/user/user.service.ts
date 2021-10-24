import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { User } from './model/user';
import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName : string = '';
  private userId! : number;
  private userSubject = new BehaviorSubject<User>(null!); //Isso é um Observable do tipo User

constructor(private tokenService : TokenService) {
  if(this.tokenService.hasToken()){
      this.decoteAndNotifica();
  }
 }

setToken(token : string){
  this.tokenService.setToken(token);
  this.decoteAndNotifica();
}

getUser(){
  return this.userSubject.asObservable();
}

getUserName(){
  return this.userName;
}

getUserId(){
  return this.userId;
}

private decoteAndNotifica(){

  const token = this.tokenService.getToken();
  const user = jwt_decode.default(token) as User; //Já é sabido que dentro do token tem um User
  this.userName = user.name;
  this.userId = user.id;
  this.userSubject.next(user);

  }

  logout(){

    this.tokenService.removeToken();
    this.userSubject.next(null!);
  }

  usuarioEstaLogado() : boolean{
    return !!this.tokenService.hasToken()
  }

}
