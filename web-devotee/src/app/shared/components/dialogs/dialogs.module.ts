import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared.module';
import { LoginQrCodeComponent } from './login-qr-code/login-qr-code.component';



@NgModule({
  declarations: [ LoginQrCodeComponent],
  imports: [
    MatDialogModule,
    SharedModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: []
})
export class DialogsModule { }
