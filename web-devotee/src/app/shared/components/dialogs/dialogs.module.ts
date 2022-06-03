import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';
import { LoginQrCodeComponent } from './login-qr-code/login-qr-code.component';
import { ActivateLocationComponent } from './activate-location/activate-location.component';



@NgModule({
  declarations: [
    LoginQrCodeComponent,
    ActivateLocationComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LoginQrCodeComponent,
    ActivateLocationComponent
  ],
  providers: [],
  bootstrap: []
})
export class DialogsModule { }
