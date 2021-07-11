import { Observable } from 'rxjs';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../services/user/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  user$! : Observable<User>;
  user!: User;

  constructor(private userService : UserService,
              private router : Router) {
    this.user$ =  userService.getUser();
    this.user$.subscribe(user => this.user = user);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {
  }

  logout(){
    console.log('fazendo logout...');
    try {
      this.userService.logout();
      this.router.navigate(['']).then(() => window.location.replace('')) ;
    } catch (error) {
      console.log('não foi possível fazer logout')
    }
  }


}
