import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { SignInRoutingModule } from './sign-in-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';


@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    SharedModule,
    MatDialogModule,
  ],
  declarations: [SignInComponent],
  exports: [],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('670097540184-3liid93hjkcib38idqtrnvrgfa6drm69.apps.googleusercontent.com') // your client id
          }
        ]
      }
    },
  ]
})
export class SignInModule { }
