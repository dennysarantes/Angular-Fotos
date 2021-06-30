import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photos } from '../../models/photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnChanges {


  @Input() photos?: Photos[] | any = [];
  rows: any[] =[];
  constructor() {
   }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }


  groupColumns( photos: Photos[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
        newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
