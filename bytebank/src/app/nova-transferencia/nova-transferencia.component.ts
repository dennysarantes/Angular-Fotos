import { EventEmitter, Input } from "@angular/core";
import { Component, Output } from "@angular/core";
import { NgForm } from "@angular/forms";


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

    valores(){
      return this.valor;
    }

    transferir(f: NgForm){

        console.log('Nova transferência solicitada...')

        const dadosTrans = { valor: this.valor, destino : this.destino } //Cria um objeto com o valor e o destino
        /* const valorEmitido = `O valor informado é: ${this.valor}`; */

        this.aoTransferir.emit(dadosTrans); //O objeto é exportado!
        this.limparFormulario()
    }

    limparFormulario(){
      this.valor = NaN;
      this.destino = '';
    }

}
