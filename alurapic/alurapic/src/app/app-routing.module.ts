import { SignupComponent } from './home/signup/signup.component';
import { NotFoundComponent } from './errors/erros/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [

  //Rota que cria um alias 'home' para o edereço localhost/
  {
    path: '',
    pathMatch:'full', //só se aplica se o usuário colocar ''
    redirectTo:'home'
  },

  //Rota para acesso ao login e registro de novo usuário
  {
    path: 'home',
    loadChildren:   () => import('src/app/home/home.module').then(m => m.HomeModule)

  },

  //Rota para adicionar fotos
  {
    path: 'p/add',
    component : PhotoFormComponent
  },

  //Rota para acessar as fotos
  {
    path: 'user/:userName' ,
    component : PhotoListComponent,
    resolve : {
                photos : PhotoListResolver
              }
  },

  {
    path: '**' ,
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
