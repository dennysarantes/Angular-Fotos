import { ImmediateClickDirective } from './../immediate-click.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImmediateClickDirective],
  imports: [CommonModule],
  exports:[ImmediateClickDirective]
})
export class ImmediateClickModule { }
