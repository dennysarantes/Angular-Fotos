import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() aoDigitarNoSearch = new EventEmitter<string>();
  @Input() value = '';

  debounce : Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.debounce
    .pipe(debounceTime(400))
    .subscribe(valorDigitado => this.aoDigitarNoSearch.emit(valorDigitado)) //Nessa linha o search é emitido
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  pegaFiltroComDebounce(event : any){

    this.debounce.next(event.target.value);
  }
}
