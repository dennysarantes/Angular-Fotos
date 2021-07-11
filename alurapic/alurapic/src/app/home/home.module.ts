import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './sigin/sigin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [SiginComponent,
                 SignupComponent,
                 HomeComponent],
  imports: [CommonModule,
            ReactiveFormsModule,
            VMessageModule,
            RouterModule]
})

export class HomeModule {}