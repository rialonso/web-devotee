import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivateLocationComponent } from '../../components/dialogs/activate-location/activate-location.component';
import { LoginQrCodeComponent } from '../../components/dialogs/login-qr-code/login-qr-code.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

constructor(
  private dialog: MatDialog,
) { }
  openQrCodeSignIn() {
    this.dialog.open(
      LoginQrCodeComponent,
      {
        width: 'calc(100% - 50px)',
        maxWidth: '100vw'
      }
    )
  }
  openActivateLocation() {
    this.dialog.open(
      ActivateLocationComponent,
      {
        width: 'calc(100% - 50px)',
        maxWidth: '100vw'
      }
    )
  }
}
