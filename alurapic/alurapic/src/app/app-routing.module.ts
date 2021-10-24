import { PhotosDetalhesModule } from './photos/photos-detalhes/photos-detalhes.module';
import { RequiresAutenticationGuard } from './services/auth/auth-guard/requires-autentication.guard';
import { SignupComponent } from './home/signup/signup.component';
import { NotFoundComponent } from './errors/erros/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotosDetalhesComponent } from './photos/photos-detalhes/photos-detalhes.component';
import { GlobalErrorComponent } from './errors/erros/global-error/global-error.component';

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
    pathMatch:'full',
    component : PhotoFormComponent,
    canActivate : [RequiresAutenticationGuard],
    data : {
      title : 'Photo Upload'
    }
  },
  {
    path: 'p/:photoId',
    component : PhotosDetalhesComponent,
    data : {
      title : 'Detalhes photo'
    }
  },

  //Rota para acessar as fotos
  {
    path: 'user/:userName' ,
    component : PhotoListComponent,
    resolve : {
                photos : PhotoListResolver
              },
    data: {
      title : 'Timeline'
    }
  },

  {
    path: 'not-found' ,
    component : NotFoundComponent,
    data : {
      title : 'Not found'
    }
  },
  {
    path: 'error' ,
    component : GlobalErrorComponent,
    data : {
      title : 'Error'
    }
  },
  {
    path: '**' ,
    redirectTo : 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
