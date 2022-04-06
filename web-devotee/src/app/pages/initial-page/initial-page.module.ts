import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page.component';
import { InitialPageRoutingModule } from './initial-page-rounting.module';

@NgModule({
  imports: [
    CommonModule,
    InitialPageRoutingModule,
  ],
  declarations: [InitialPageComponent],
  exports: [
    InitialPageRoutingModule,
  ]
})
export class InitialPageModule { }
