import { Photos } from './../models/photos.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPelaDescricao'
})
export class FiltrarPelaDescricaoPipe implements PipeTransform {

  transform(photos: Photos[], stringFilter : string) {

    stringFilter = stringFilter.trim().toLocaleLowerCase();

    if (stringFilter) {

      return photos.filter(photo =>
                  photo.description.toLowerCase().includes(stringFilter)
      );
    }else{
      return photos;
    }

    return null;
  }

}
