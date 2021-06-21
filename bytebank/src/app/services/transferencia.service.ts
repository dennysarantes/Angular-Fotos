import { Transferencia } from './../models/transferencias.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private dadosTransferenciasX : any[] = [];
  private valorTotalTransferencias : number;
  private urlGetTransferencias = 'http://localhost:3000/transferencias'
  private urlPostTransferencias = 'http://localhost:3000/transferencias'


    constructor(private httpClient: HttpClient) {
      this.dadosTransferenciasX = [];
      this.valorTotalTransferencias = 0;
   }

   get transferenciasX(){
     return this.dadosTransferenciasX;
   }

   get totalTransferencias(){
     return this.valorTotalTransferencias;
   }

   getTransferenciasApi() : Observable<Transferencia>{
     return this.httpClient.get<Transferencia>(this.urlGetTransferencias);
   }

   transferencia(transferencia : any) : Observable<Transferencia>{

    const transferenciaCompleta = this.complementarTransferencia(transferencia);
    return this.httpClient.post<Transferencia>(this.urlGetTransferencias, transferenciaCompleta);

    //this.dadosTransferenciasX.push(transferenciaCompleta);


    this.atualizaTotal(transferencia);
  }

  complementarTransferencia(transferencia : any){
    return {...transferencia, data : new Date()};
  }

  atualizaTotal(transferencia : any) : void{
    this.valorTotalTransferencias = (transferencia.valor + this.valorTotalTransferencias);
  }



}
