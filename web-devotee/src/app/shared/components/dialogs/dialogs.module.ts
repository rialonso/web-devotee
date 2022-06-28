import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';
import { LoginQrCodeComponent } from './login-qr-code/login-qr-code.component';
import { ActivateLocationComponent } from './activate-location/activate-location.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { QRCodeModule } from 'angularx-qrcode';
import { EditProfilePicturesComponent } from './edit-profile-pictures/edit-profile-pictures.component';
import { EditAboutMeComponent } from './edit-about-me/edit-about-me.component';

const dialogsComponent = [
  LoginQrCodeComponent,
  ActivateLocationComponent,
  ProfileComponent,
  ChangePasswordComponent,
  EditProfilePicturesComponent,
  EditAboutMeComponent,
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
