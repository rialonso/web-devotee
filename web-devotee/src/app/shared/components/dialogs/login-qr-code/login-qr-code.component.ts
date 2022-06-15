import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenerateHashQrcodeService } from 'src/app/core/services/generate-hash-qrcode/generate-hash-qrcode.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-login-qr-code',
  templateUrl: './login-qr-code.component.html',
  styleUrls: ['./login-qr-code.component.scss']
})
export class LoginQrCodeComponent implements OnInit {
  dataTexts;
  showLoading = false;

  qrCodeHash: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<LoginQrCodeComponent>,
    private generateHashQrcodeService: GenerateHashQrcodeService,
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;
    this.generateHashToQrcode();
  }
  onNoClick(){
    this.matDialogRef.close();
  }
  async generateHashToQrcode() {
    this.showLoading = true;
    const hashReponse = await this.generateHashQrcodeService.post().toPromise();
    this.showLoading = false;
    this.qrCodeHash = hashReponse.data.hash;
  }
}
