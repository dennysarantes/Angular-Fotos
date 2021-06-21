import { Transferencia } from './../models/transferencias.model';
import { EventEmitter, Input } from "@angular/core";
import { Component, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TransferenciaService } from "../services/transferencia.service";


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
    @Output() aoTransferir = new EventEmitter<any>(); //Criando um eventEmitter --> que é uma classe do Angular
                                                    //Reponsável por exportar dados de um componente

    valor : number = 0;
    destino : string = '';

    constructor(private service : TransferenciaService){ }

    valores(){
      return this.valor;
    }

    transferir(f: NgForm){

        console.log('Nova transferência solicitada...')

        const dadosTrans : Transferencia = { valor: this.valor, destino : this.destino } //Cria um objeto com o valor e o destino
        /* const valorEmitido = `O valor informado é: ${this.valor}`; */

        this.aoTransferir.emit(dadosTrans); //O objeto é exportado!

        this.service.transferencia(dadosTrans).subscribe(resultadoPost => {
          console.log(resultadoPost);
          this.limparFormulario()
        },
          error => console.error(error)
        );

    }

    limparFormulario(){
      this.valor = NaN;
      this.destino = '';
    }

}
