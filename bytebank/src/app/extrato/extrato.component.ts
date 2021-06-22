import { Transferencia } from './../models/transferencias.model';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() total : number = 0; //Recebido pelo app.component e service

  transferenciasParaMostrarNoExtrato : Transferencia[] = [];
  totalValor : number;

  constructor(private service : TransferenciaService){this.totalValor = 0;} //Injeta a classe de serviço

  ngOnInit(): void {
    //this.transferenciasParaMostrarNoExtrato =  this.service.transferenciasX;
    this.service.getTransferenciasApi().subscribe((transferenciasRecebidasAAPI : Transferencia[] | any)  => {
      console.table("Tabela: " + transferenciasRecebidasAAPI)
      this.transferenciasParaMostrarNoExtrato = transferenciasRecebidasAAPI;
      this.transferenciasParaMostrarNoExtrato.forEach(t => {
        this.totalValor = (this.totalValor + t.valor);
      })
    })
  }

}
