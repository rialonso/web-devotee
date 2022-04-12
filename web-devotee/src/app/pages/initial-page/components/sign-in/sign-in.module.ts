import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { SignInRoutingModule } from './sign-in-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    MatIconModule,
    SharedModule,
  ],
  declarations: [SignInComponent],
  exports: []
})
export class SignInModule { }
