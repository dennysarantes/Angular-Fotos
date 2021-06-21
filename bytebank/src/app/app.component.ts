import { EventEmitter } from '@angular/core';

import { Component } from '@angular/core';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service : TransferenciaService){}
  total : number = 0;

  title = 'bytebank';
  //dadosTransferenciasX : any[] = [];

  transferencia($event : any){

     this.service.transferencia($event);
     this.total = this.service.totalTransferencias;
  }

}
