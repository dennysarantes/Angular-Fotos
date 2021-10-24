import { Alert, AlertType } from './alert';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
//Esse serviço é o responsável por fazer o subject de Alertas de mensagens da aplicação
export class AlertService {


  alertSubject : Subject<Alert> = new Subject<Alert>();
  keepAfterRouteChange = false;

    constructor(private router : Router){
        //O AlertService se inscreve em um subscribe do router, para escutar
        //quando há uma alteração de rota na aplicação.
        //Isso será necessário, pois, nesse exemplo, caso uma msg de alerta esteja sendo
        //mostrada, ao mudar de rota ela deverá sumir.
        this.router.events.subscribe(event => {
            if(event instanceof NavigationStart) //Testa se é uma instância de NavigationStar
                if(this.keepAfterRouteChange){   //Essa é a forma de descobrir se o usuário
                  this.keepAfterRouteChange = false; //Mudou a rota de navegação.
                }else{
                  this.clear();
                }

        })
    }


    success(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
    }

    warning(message: string , keepAfterRouteChange = false) {
        this.alert(AlertType.WARNING, message, keepAfterRouteChange);
    }

    danger(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.DANGER, message, keepAfterRouteChange);
    }


    info(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.INFO, message , keepAfterRouteChange = false );
    }

    //Quem quiser emitir um alerta, usa esse metodo atraves dos metodos auxiliares acima
    private alert(alertType: AlertType, message: string , keepAfterRouteChange : boolean) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.alertSubject.next(new Alert(alertType, message))
    }

    //Quem quiser escutar um alerta se inscreve nesse metodo!!
    getAlert() {
        return this.alertSubject.asObservable();
    }

    clear(){
      this.alertSubject.next();
    }
}
