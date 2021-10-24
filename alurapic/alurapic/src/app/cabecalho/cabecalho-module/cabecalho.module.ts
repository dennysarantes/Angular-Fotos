import { CheckIfLoggedModule } from './../../shared/diretivas/check-logged/check-if-logged.module';
import { MenuModule } from './../../shared/components/menu/menu/menu.module';
import { AlertModule } from './../../shared/components/alert/alert/alert.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../cabecalho.component';
import { LoadingModule } from 'src/app/shared/components/loading/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule,
    CheckIfLoggedModule
  ],
  declarations: [CabecalhoComponent],
  exports : [CabecalhoComponent]
})
export class CabecalhoModule { }
