import { Photos } from './../models/photos.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './../../services/apiService.service';

@Injectable({providedIn: 'root'})

export class PhotoListResolver implements Resolve<Observable<Photos[]>> {

  constructor(private service : ApiService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<Photos[]> | Observable<Observable<Photos[]>> |
      Promise<Observable<Photos[]>> | any{

        const userName = route.params.userName;
        //return this.service.getPhotosApiPorNome(userName);
        return this.service.getPhotosApiPorNomePaginado(userName , 1);
  }
}
