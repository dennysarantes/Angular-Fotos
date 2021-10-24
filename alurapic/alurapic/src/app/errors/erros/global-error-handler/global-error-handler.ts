import { ServerLogService } from './server-log-service';
import { User } from './../../../services/user/model/user';
import { UserService } from './../../../services/user/user.service';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from 'stacktrace-js'
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector : Injector) {}

handleError(error: Error | any): void {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);

    const url = location instanceof PathLocationStrategy
                ? location.path()
                : '';

    const errorMessage = error.message ? error.message : error.toString();

    router.navigate(['/error'])

    StackTrace
    .fromError(error)
    .then(stackFrames => {
        const stackAsString = stackFrames
          .map(sf => sf.toString())
          .join('\n');

          console.log('[ERROR]:  ' + today.toUTCString() + ' - '  + errorMessage);
          console.log('StackTrace ERROR:  \n' + stackAsString);
          console.log({ today , message : errorMessage, url, userName: userService.getUserName(), stackAsString})

          serverLogService.log({
            message : errorMessage,
            url,
            userName : userService.getUserName(),
            stack : stackAsString
          })
          .subscribe(() => {
            console.log('Erro gravado no servidor!')
          }, (error) => {
            console.log('Não foi possível gravar o erro no servidor \n' + error)
          })
      })
  }

}
