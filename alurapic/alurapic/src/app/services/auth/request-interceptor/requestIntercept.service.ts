import { TokenService } from './../../token/token.service';
import { UserService } from './../../user/user.service';
import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptService implements HttpInterceptor{

/*
*  IMPORTANTE: Pra esse intercept funcionar, deve-se inserir em provider do app-module
*  vide já inserido!!!
*/


constructor(private userService : UserService,
            private tokenService : TokenService) { }
            intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
            | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    if(this.userService.usuarioEstaLogado()) {
      const token = this.tokenService.getToken();

      req = req.clone({
        setHeaders : {
          //'Authorization': btoa(`Basic ${token}:${senha}`)
           'x-access-token': token
        }
    });
    }

    return next.handle(req);
  }


}
