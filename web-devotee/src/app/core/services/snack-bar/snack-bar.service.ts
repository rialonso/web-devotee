import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }
  openSnackbarLocationBlocked(mensage?: string, button?: string, backgroudClass = 'bg-color-white') {
    this.snackBar.open(
      mensage, button,
      {
        panelClass: backgroudClass,
      }
    );
  }
  openSnackbarSuccess(mensage: string, button: string, backgroudClass = 'success-snackbar') {
    this.snackBar.open(
      mensage, button,
      {
        duration: 2000,
        panelClass: backgroudClass,
      }
    );
  }
  openSnackbarWarning(
    mensage: string,
    button: string,
    duration = 2000
    ) {
    this.snackBar.open(
      mensage, button,
      {
        duration: duration,
        panelClass: 'warning-snackbar',
      }
    );
  }
}
