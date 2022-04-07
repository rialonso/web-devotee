import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page.component';
import { InitialPageRoutingModule } from './initial-page-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InitialPageRoutingModule,
    SharedModule,
  ],
  declarations: [InitialPageComponent],
  exports: [
    InitialPageRoutingModule,
  ]
})
export class InitialPageModule { }
