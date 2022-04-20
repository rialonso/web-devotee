import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RememberPasswordComponent } from './remember-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RememberPasswordRoutingModule } from './remember-password.rounting.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RememberPasswordRoutingModule,
  ],
  declarations: [RememberPasswordComponent]
})
export class RememberPasswordModule { }
