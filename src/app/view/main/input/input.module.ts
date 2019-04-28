import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { InputComponent } from './input.component';
@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputModule { }
