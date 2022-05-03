import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginQrCodeComponent } from '../../components/dialogs/login-qr-code/login-qr-code.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

constructor(
) { }
  openQrCodeSignIn() {
    // this.dialog.open(
    //   LoginQrCodeComponent,
    //   {
    //     width: 'calc(100% - 50px)',
    //     maxWidth: '100vw'
    //   }
    // )
  }
}
