import { rootReducer } from "./state-management/root.reducer";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { IConfig, NgxMaskModule } from "ngx-mask";
import { AuthGuardService } from "./core/guards/auth-guard/auth.guard.service";
import { GoogleLoginProvider, SocialLoginModule } from "@abacritt/angularx-social-login";
/**
 * Mask config
 */
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(rootReducer),
    NgxMaskModule.forRoot(maskConfig),
    SocialLoginModule,
  ],
  exports:[
    AppRoutingModule,
  ],
  providers: [
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
    AuthGuardService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
