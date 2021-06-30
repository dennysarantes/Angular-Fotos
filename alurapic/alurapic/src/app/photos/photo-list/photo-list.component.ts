import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/apiService.service';
import { Photos } from '../models/photos.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  //@Output (aofiltrar) filtro(event?: Event);

  filter : string | any = '';
  photosList : Photos[] = [];
  /* debounce : Subject<string> = new Subject<string>(); */
  hasMore : boolean =  true;
  currentPage : number = 1;
  userName : string = '';


  constructor(private serviceApiPhotos : ApiService,
    private activatedRouter : ActivatedRoute) { }

    ngOnInit() {
      this.userName = this.activatedRouter.snapshot.params.userName;
      //this.carregaFotosNaTela()'
      this.photosList = this.activatedRouter.snapshot.data.photos; //O array de fotos já foi carregado pelo resolver
     /*  this.debounce
            .pipe(debounceTime(400))
            .subscribe( valorFiltroDigitado => this.filter = valorFiltroDigitado); */
      }

     /*  ngOnDestroy(): void {
        this.debounce.unsubscribe();
      } */

      get listaFotos(){
        return this.photosList;
      }

     /*  pegaFiltro(event : any){

        this.filter = event.target.value;
      } */

      /* pegaFiltroComDebounce(event : any){

        //this.debounce.next(event.target.value);
      } */

      load(){
        let photoslistAux : Photos[] | any
        this.serviceApiPhotos
              .getPhotosApiPorNomePaginado(this.userName, ++this.currentPage)
              .subscribe(photos => {
                                      this.filter = '';
                                      photoslistAux = photos;
                                      this.photosList = this.photosList.concat(photos);
                                      if (!photoslistAux.length) this.hasMore = false;
                                    });
      }


      carregaFotosNaTela() {
        //Com o resolver implementado, esse método é desnecessário.
        //let userName = this.activatedRouter.snapshot.params.userName // aqui o componente pega o usuario http://localhost:4200/user/flavio

        /*  this.serviceApiPhotos
          .getPhotosApiPorNome(userName)
          .subscribe(
                    (photos : Photos[] | any) => {
                        console.table(photos);
                        this.photosList = photos;
                    },
                    err => console.log("Erro: " + err.message)
        ); */
      }
    }
