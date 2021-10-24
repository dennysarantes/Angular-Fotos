import { User } from './../services/user/model/user';
import { Observable } from 'rxjs';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  user$!: Observable<User>
  link! : string;
  constructor(private userService : UserService) { }

  ngOnInit() {
      this.user$ =  this.userService.getUser();
  }

}
