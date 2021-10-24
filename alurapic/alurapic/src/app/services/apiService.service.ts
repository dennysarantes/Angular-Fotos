import { environment } from './../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { TokenService } from './token/token.service';
import { AuthService } from './auth/auth.service';
import { Observable, of, throwError } from 'rxjs';
import { Photos } from './../photos/models/photos.model';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUser } from '../home/signup/model/newUserForm';
import { PhotoComment } from '../photos/models/photoComment';

const urlPhotos = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {


  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router : Router) { }

  getPhotosApiPorNome(userName : string) : Observable<Photos>{

    return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos');
  }

  getPhotosApiPorNomePaginado(userName : string, page: number) : Observable<Photos>{

    const params = new HttpParams().append('page', page.toString());
    if(this.tokenService.hasToken()){
      let token = this.tokenService.getToken();
      return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos',
      {/* headers: {"x-access-token": token}, */  params : params} //esse params é a page estipulada na API},
      );
    }
    return this.httpClient.get<Photos>(urlPhotos + userName  + '/photos', {params : params});
  }

  userNameJaExiste(userName : string){

    return this.httpClient.get(urlPhotos + 'user/exists/' + userName);
  }

  getUserNameParameter(){
     //console.log()
  }


  registraUsuario(newUser: NewUser) {
    return this.httpClient.post(urlPhotos + 'user/signup', newUser);
  }

  upload(description : string , allowComments : boolean, file : File){
      const formData = new FormData();
      formData.append('description', description);
      formData.append('allowComments' , allowComments ? 'true' : 'false');
      formData.append('imageFile', file);

      return this.httpClient.post(urlPhotos + 'photos/upload', formData, {
        observe : 'events',
        reportProgress : true  //Isso é necessário para usar o o spinner de progresso
      });
  }

  findbyId(photoId : number) {
    return this.httpClient.get<Photos>(urlPhotos + 'photos/' + photoId);
  }

  getComments(photoId : number) {
    return this.httpClient.get<PhotoComment[]>(
          urlPhotos + 'photos/' + photoId + '/comments');
  }

  addComments(photoId : number, commentText : string){
    return this.httpClient.post<PhotoComment[]>(
      urlPhotos + 'photos/' + photoId + '/comments', {commentText : commentText});
  }

  removePhoto(photoId: number) {
    return this.httpClient.delete(urlPhotos + 'photos/' + photoId);
  }


  //IMPORTANTE!!!!
  //Nesse método,diferente dos demais, a intenção é saber se a foto foi curtida ou não.
  //Nesse caso, o backend retorna erro 304 quando o usuário tenta curtir duas vezes a
  //mesma foto. Mas o que importa, para o componente, é saber se, ao clicar,
  //a foto foi curtida ou não (true ou false)
  //Para isso pega-se o cabeçalho da resposta com o {observe : 'response'}
  //Usa o primeiro .pipe res => true pra retornar em caso de sucesso!
  //Em caso de erro 304, retorna um observable of(false), sem estourar erro no console
  //O of() do Rxjs substitui o retorno do observable! Ou seja, ao invés de estourar o erro
  //Devolve um false... mas poderia retornar o que for necessário
  //e se ocorrer outro tipo de erro faz um throwError(err), que aí sim estoura o erro.
  like(photoId : number){
    return this.httpClient.post(
      urlPhotos + 'photos/' + photoId + '/like', {}, {observe : 'response'})
      .pipe(map(res => {return true} ))
      .pipe(catchError(err => {
        return err.status == '304' ? of(false) : throwError(err);
      }));
  }
}

