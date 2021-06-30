import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {

  @Input() description = ''; //A descrição é passada lá no html do componente Inbound properties
  @Input() caminhoImg = ''   //A url é passada lá no html do componente Inbound properties

  constructor() {

  }

  ngOnInit() {

  }



}
