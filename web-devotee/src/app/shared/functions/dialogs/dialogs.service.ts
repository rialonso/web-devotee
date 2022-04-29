import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

constructor(
  public dialog: MatDialog
) { }

}
