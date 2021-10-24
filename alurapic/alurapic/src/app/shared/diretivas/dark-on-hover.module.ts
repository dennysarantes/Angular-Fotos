import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkOnHoverDirective } from './dark-on-hover.directive';
import { ImmediateClickDirective } from './immediate-click.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [		 DarkOnHoverDirective,
   ],
  exports: [ DarkOnHoverDirective ]
})
export class DarkOnHoverModule { }
