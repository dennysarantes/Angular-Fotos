import { CheckIfLoggedModule } from './../shared/diretivas/check-logged/check-if-logged.module';
import { CheckOwnerPhotoModule } from './../shared/diretivas/check-owner-photo/check-owner-photo.module';
import { PhotoCommentsComponent } from './photos-detalhes/photo-comments/photo-comments.component';
import { PhotosDetalhesComponent } from './photos-detalhes/photos-detalhes.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CabecalhoModule } from './../cabecalho/cabecalho-module/cabecalho.module';
import { FiltrarPelaDescricaoPipe } from './photo-list/filtrarPelaDescricao.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from '../shared/components/card/card-module/card.module';
import { SearchComponent } from './photo-list/search/search.component';
import { DarkOnHoverModule } from '../shared/diretivas/dark-on-hover.module';
import { ImmediateClickModule } from '../shared/diretivas/immediate-click/immediate-click.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    VMessageModule,
    CardModule,
    DarkOnHoverModule,
    CabecalhoModule,
    RouterModule,
    ImmediateClickModule,
    CheckOwnerPhotoModule,
    CheckIfLoggedModule
  ],
  declarations: [
                  PhotoComponent,
                  PhotoListComponent,
                  PhotoFormComponent,
                  PhotosComponent,
                  FiltrarPelaDescricaoPipe,
                  LoadButtonComponent,
                  SearchComponent,
                  PhotosDetalhesComponent,
                  PhotoCommentsComponent
                ]
  ,exports : [
                  PhotoComponent,
                  PhotoListComponent,
                  PhotoFormComponent,
                  PhotosDetalhesComponent
             ]
})
export class PhotosModule { }
