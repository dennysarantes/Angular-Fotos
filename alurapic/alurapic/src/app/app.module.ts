import { AlertModule } from './shared/components/alert/alert/alert.module';
import { FooterModule } from './footer/footer/footer.module';
import { RouterModule } from '@angular/router';
import { CabecalhoModule } from './cabecalho/cabecalho-module/cabecalho.module';
import { ErrosModule } from './errors/erros/erros.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { RequestInterceptService } from './services/auth/request-interceptor/requestIntercept.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrosModule,
    CabecalhoModule,
    RouterModule,
    FooterModule,
    AppRoutingModule,
    AlertModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, // esse provider é para incluir o token no header
    useClass: RequestInterceptService,
    multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
