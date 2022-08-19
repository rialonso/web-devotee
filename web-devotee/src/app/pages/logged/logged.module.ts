import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoggedComponent } from './logged.component';
import { RouterModule } from '@angular/router';
import { LoggedRoutingModule } from './logged-rounting.module';



@NgModule({
  declarations: [
    LoggedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    LoggedRoutingModule,
  ]
})
export class LoggedModule { }
