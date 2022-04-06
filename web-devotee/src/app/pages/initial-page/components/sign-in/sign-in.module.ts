import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { SignInRoutingModule } from './sign-in-rounting.module';


@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule
  ],
  declarations: [SignInComponent],
  exports: []
})
export class SignInModule { }
