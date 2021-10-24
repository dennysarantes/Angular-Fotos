import { LoadingType } from './loading.type';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading$! : Observable<string | any>

  constructor(private loadingService : LoadingService) { }

  ngOnInit() {
      this.loading$ = this.loadingService
      .getLoading()
      .pipe(map(loadingType => loadingType.valueOf()));
  }

}
