import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../services/auth/auth-guard/auth.guard";
import { HomeComponent } from "./home/home.component";
import { SiginComponent } from "./sigin/sigin.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [

  //Rota para acesso ao login e registro de novo usuário
  {
       path: ''
        ,component : HomeComponent
        ,canActivate: [AuthGuard],
        children: [
          {path: '' , component : SiginComponent},
          {path: 'user/add' , component : SignupComponent}
        ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
