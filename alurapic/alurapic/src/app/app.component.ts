import { Photos } from './photos/models/photos.model';
import { ApiService } from './services/apiService.service';
import { Component, OnInit } from '@angular/core';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alurapic';
  photos : Photos[] = [];
  photoList : any;


  constructor(private serviceApiPhotos : ApiService) {

  }

  ngOnInit(): void {

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
