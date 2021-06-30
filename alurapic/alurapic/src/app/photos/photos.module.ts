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
import { DarkOnHoverDirective } from '../shared/diretivas/dark-on-hover.directive';
import { DarkOnHoverModule } from '../shared/diretivas/dark-on-hover.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    DarkOnHoverModule
  ],
  declarations: [
                  PhotoComponent,
                  PhotoListComponent,
                  PhotoFormComponent,
                  PhotosComponent,
                  FiltrarPelaDescricaoPipe,
                  LoadButtonComponent,
                  SearchComponent,
                ]
  ,exports : [
                  PhotoComponent,
                  PhotoListComponent
             ]
})
export class PhotosModule { }
