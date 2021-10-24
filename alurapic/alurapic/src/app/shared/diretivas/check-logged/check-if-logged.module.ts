import { CheckIfLoggedDirective } from './check-If-logged.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CheckIfLoggedDirective],
  imports: [
    CommonModule
  ],
  exports : [CheckIfLoggedDirective]
})
export class CheckIfLoggedModule { }
