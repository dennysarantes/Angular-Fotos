import { NewUser } from './../../home/signup/model/newUserForm';
import { ApiService } from 'src/app/services/apiService.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

private res : string | any= '';

constructor(private apiService : ApiService) { }


  verificaUserName(userName : string){
    return this.apiService.userNameJaExiste(userName)
  }

  registraUsuario(newUser : NewUser){
    //console.log(this.apiService.registraUsuario(newUser))
    return this.apiService.registraUsuario(newUser);
  }

}
