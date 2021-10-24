import { Photos } from './photos/models/photos.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alurapic';
  photos : Photos[] = [];
  photoList : any;


  constructor(private router : Router,
              private activatePage : ActivatedRoute,
              private titleService : Title) {

  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
          let child = this.activatePage.firstChild;
          console.log('entrou');
          console.log('rota atual: ' + this.activatePage)
          while (child?.firstChild) {
            child = child.firstChild;
          }

          this.titleService.setTitle(child?.snapshot.data.title);
          break;

        default:
          break;
      }
    });
  }


  /* carregaFotosNaTela() {
    this.serviceApiPhotos
      .getPhotosApiPorNome('flavio')
      .subscribe(
                (photos : Photos[] | any) => {
                    console.table(photos);
                    this.photos = photos;
                },
                err => console.log("Erro: " + err.message)
    );
  } */

}
