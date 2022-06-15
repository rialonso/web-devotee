import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';
import { LoginQrCodeComponent } from './login-qr-code/login-qr-code.component';
import { ActivateLocationComponent } from './activate-location/activate-location.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { QRCodeModule } from 'angularx-qrcode';

const dialogsComponent = [
  LoginQrCodeComponent,
  ActivateLocationComponent,
  ProfileComponent,
  ChangePasswordComponent,
]

@NgModule({
  declarations: [
    ...dialogsComponent,
    ChangePasswordComponent,
  ],
  imports: [
    SharedModule,
    QRCodeModule,
  ],
  exports: [
    ...dialogsComponent,

  ],
  providers: [],
  bootstrap: []
})
export class DialogsModule { }
