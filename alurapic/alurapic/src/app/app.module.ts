import { RouterModule } from '@angular/router';
import { CabecalhoModule } from './cabecalho/cabecalho-module/cabecalho.module';
import { ErrosModule } from './errors/erros/erros.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { CardComponent } from './shared/components/card/card.component';
import { HomeModule } from './home/home.module';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';



@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrosModule,
    HomeModule,
    CabecalhoModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
