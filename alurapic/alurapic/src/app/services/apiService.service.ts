import { Observable } from 'rxjs';
import { Photos } from './../photos/models/photos.model';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const urlPhotos = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {



  constructor(
    private httpClient: HttpClient,
    private activatedRouter : ActivatedRoute) { }

  getPhotosApiPorNome(userName : string) : Observable<Photos>{

    return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos');
  }

  getPhotosApiPorNomePaginado(userName : string, page: number) : Observable<Photos>{

    const params = new HttpParams().append('page', page.toString());
    return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos', {
      params : params //esse params é a page estipulada na API
    });
  }


  getUserNameParameter(){

     //console.log()

  }

}

