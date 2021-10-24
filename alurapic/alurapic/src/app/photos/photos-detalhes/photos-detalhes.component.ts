import { AlertService } from './../../shared/components/alert/alert.service';
import { UserService } from './../../services/user/user.service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/apiService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photos } from '../models/photos.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-photos-detalhes',
  templateUrl: './photos-detalhes.component.html',
  //styleUrls: ['./photos-detalhes.component.scss']
})
export class PhotosDetalhesComponent implements OnInit {


  idPhoto! : number;
  photo$ : Observable<Photos> | undefined;
  estaLogado : boolean = false;

  constructor(private route: ActivatedRoute,
              private router : Router,
              private apiService : ApiService,
              private userService : UserService,
              private alertService : AlertService
              ) { }

  ngOnInit() {

    if (this.userService.getUserId()) this.estaLogado = true;

    this.idPhoto = this.route.snapshot.params.photoId; //O nome do parâmetro deve ser idêntico àquele colocado na rota!

    this.photo$ =  this.apiService.findbyId(this.idPhoto);
    this.photo$
    .subscribe(() => {}
    ,(error) => {
      this.router.navigate(['not-found']);
      this.alertService.danger('Esta foto já foi deletada....', true);
    }
    )

    //this.verificaDonoPhoto();

  }

  removePhoto(){
      this.apiService
        .removePhoto(this.idPhoto)
        .subscribe(() => {
          this.router.navigate(['/user', this.userService.getUserName()], {replaceUrl : true});
          this.alertService.success('Foto removida com sucesso!', false);
        }
        , (error) => {
          console.log('não foi possível deletar a foto');
          this.alertService.warning('Erro ao tentar remover foto')
        });
  }

  verificaDonoPhoto(){
    /* this.photo$?.subscribe((photo) => {
        if(photo.userId == this.userService.getUserId()){
            this.ehDono = true;
        }
    }); */
  }

  like(photo : Photos){
    this.apiService.like(photo.id)
    .subscribe(curtido => {
        if(curtido){
          this.photo$ = this.apiService.findbyId(photo.id);
        }
    })
  }
}
