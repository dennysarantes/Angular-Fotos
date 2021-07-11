import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { SignupService } from './../../services/signup/signup.service';
import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class UserNameJaExisteValidator {

constructor(private signupService : SignupService){}

/* Esse método é necessário pois o validator do Angular é uma function e, por isso,
não aceita injeção de dependência. */

  checkUserName(){
    return (control : AbstractControl) => {

      return control
            .valueChanges
            .pipe(debounceTime(500))
            .pipe(switchMap(userName => { //Esse passo é importante para que o observable troque 'switch' a chamada
              return this.signupService.verificaUserName(userName);
            }))
            .pipe(map(jaExiste => jaExiste ? {userJaExiste : true} : false))
            //Se o usuário existir retorna um objeto, caso contrário devolve false
            .pipe(first());
    }
  }
}
