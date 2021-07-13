import { TokenService } from './token/token.service';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Photos } from './../photos/models/photos.model';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewUser } from '../home/signup/model/newUserForm';

const urlPhotos = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {





  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService) { }

  getPhotosApiPorNome(userName : string) : Observable<Photos>{

    return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos');
  }

  getPhotosApiPorNomePaginado(userName : string, page: number) : Observable<Photos>{

    const params = new HttpParams().append('page', page.toString());
    if(this.tokenService.hasToken()){
      let token = this.tokenService.getToken();
      return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos',
      {/* headers: {"x-access-token": token}, */  params : params} //esse params é a page estipulada na API},
      );
    }
    return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos', {params : params});
  }

  userNameJaExiste(userName : string){

    return this.httpClient.get(urlPhotos + 'user/exists/' + userName);
  }

  getUserNameParameter(){
     //console.log()
  }


  registraUsuario(newUser: NewUser) {
    return this.httpClient.post(urlPhotos + 'user/signup', newUser);
  }


}

