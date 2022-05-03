import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-login-qr-code',
  templateUrl: './login-qr-code.component.html',
  styleUrls: ['./login-qr-code.component.scss']
})
export class LoginQrCodeComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<LoginQrCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;

  }
  onNoClick(){
    this.matDialogRef.close();
  }
}
