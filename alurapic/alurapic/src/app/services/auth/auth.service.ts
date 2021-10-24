import { environment } from './../../../environments/environment';
import { TokenService } from './../token/token.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators'
import { UserService } from '../user/user.service';

const API_URL = environment.ApiUrl


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: string | any;

constructor(private http: HttpClient,
            private userService : UserService) { }

OnInit(){

}

authenticate(userName: string , password: string){

    return this.http
      .post(API_URL + 'user/login',
              {userName : userName, password: password}, {observe: 'response'})
      .pipe(tap(res =>{
          const token = res.headers.get('x-access-token');
          this.userService.setToken(token!);
      }))
}

}
