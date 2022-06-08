import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';
import { LoginQrCodeComponent } from './login-qr-code/login-qr-code.component';
import { ActivateLocationComponent } from './activate-location/activate-location.component';
import { ProfileComponent } from './profile/profile.component';

const dialogsComponent = [
  LoginQrCodeComponent,
  ActivateLocationComponent,
  ProfileComponent,
]

@NgModule({
  declarations: [
    ...dialogsComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ...dialogsComponent,

  ],
  providers: [],
  bootstrap: []
})
export class DialogsModule { }
