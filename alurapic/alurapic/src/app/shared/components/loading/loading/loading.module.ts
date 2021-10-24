import { LoadingService } from './../loading.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './../loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingInterceptor } from '../loading.interceptor';



@NgModule({
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true //Se houver outros interceptores, esse também será aplicado
  }]
})
export class LoadingModule { }
