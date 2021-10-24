import { CheckOwnerPhotoDirective } from './../checkOwnerPhoto.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CheckOwnerPhotoDirective],
  imports: [
    CommonModule
  ],
  exports : [CheckOwnerPhotoDirective]
})
export class CheckOwnerPhotoModule { }
