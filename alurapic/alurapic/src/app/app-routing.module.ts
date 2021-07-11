import { SignupComponent } from './home/signup/signup.component';
import { NotFoundComponent } from './errors/erros/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SiginComponent } from './home/sigin/sigin.component';
import { AuthGuard } from './services/auth/auth-guard/auth.guard';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {     path: ''
        ,component : HomeComponent
        ,canActivate: [AuthGuard],
        children: [
          {path: '' , component : SiginComponent},
          {path: 'user/add' , component : SignupComponent}
        ]
  },
  {path: 'p/add' , component : PhotoFormComponent},


  {path: 'user/:userName' , component : PhotoListComponent,
  resolve : {
    photos : PhotoListResolver
  }},
  {path: '**' , component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
