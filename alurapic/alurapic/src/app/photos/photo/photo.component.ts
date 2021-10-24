import { Component, Input, NgModule, OnInit } from '@angular/core';

const ENDERECO_SERVIDOR_IMGS = 'http://localhost:3000/imgs/'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {

  @Input() description : string | any = ''; //A descrição é passada lá no html do componente Inbound properties
  //@Input() caminhoImg = ''   //A url é passada lá no html do componente Inbound properties

  private _caminhoImg = '';
  @Input() set caminhoImg(url : string) {
    try {
      if(!url.startsWith('data')){
        this._caminhoImg = ENDERECO_SERVIDOR_IMGS + url;
      }else{
        this._caminhoImg = url;
      }
    } catch (error) {
      console.log('erro ao tentar acessar detalhes...')
    }
  }

  get caminhoImg(){
    return this._caminhoImg;
  }

  constructor() { }

  ngOnInit() {

  }



}
