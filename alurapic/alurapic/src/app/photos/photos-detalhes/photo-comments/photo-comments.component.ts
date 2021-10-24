import { switchMap , tap } from 'rxjs/operators';
import { PhotoComment } from './../../models/photoComment';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/apiService.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {

  comments$! : Observable<PhotoComment[]>
  @Input() idPhoto : number | any;
  formCommentsGroup! : FormGroup;

  constructor(private apiService : ApiService,
              private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.comments$ = this.apiService.getComments(this.idPhoto);

    this.formCommentsGroup = this.formBuilder.group({
      comment : ['', [Validators.required , Validators.maxLength(300)]]
    })
  }

  save(){

    //Aqui, após o usuário clicar no botão publicar as seguintes ações são realizadas:
    //  1- addComments()  -> publica o comentário
    //  2- switchMap para getComments()  -> em caso de sucesso no addComments, faz getComments
    //  3- tap()  -> Após realizar a última operação, apresente o alert e reset o formulário
    // IMPORTANTE -> o this.comments$ está recebendo o resultado do que vem do switchMap,
    //  ou seja, o getComments!!
    this.comments$ = this.apiService
    .addComments(this.idPhoto, this.formCommentsGroup.get('comment')?.value)
    .pipe(switchMap(() => this.apiService.getComments(this.idPhoto)))
    .pipe(tap(() => {
      alert('Comentário cadastrado com sucesso!');
      this.formCommentsGroup.reset();
    }))
  }

}
