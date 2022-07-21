import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GenerateHashQrcodeService } from 'src/app/core/services/generate-hash-qrcode/generate-hash-qrcode.service';
import { ReadHashQrcodeService } from 'src/app/core/services/read-hash-qrcode/read-hash-qrcode.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { LoginQrcodeConnectorService } from 'src/app/core/services/websockets/login-qrcode-connector/login-qrcode-connector.service';

@Component({
  selector: 'app-login-qr-code',
  templateUrl: './login-qr-code.component.html',
  styleUrls: ['./login-qr-code.component.scss']
})
export class LoginQrCodeComponent implements OnInit {
  dataTexts;
  showLoading = false;

  qrCodeHash: string;
  intervalValidadeHash;

  destroy$ = new ReplaySubject();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<LoginQrCodeComponent>,
    private generateHashQrcodeService: GenerateHashQrcodeService,
    private readHashQrcodeService: ReadHashQrcodeService,
    private loginQrcodeConnectorService: LoginQrcodeConnectorService,
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;
    this.generateHashToQrcode();
  }
  onNoClick(){
    clearInterval(this.intervalValidadeHash);
    this.matDialogRef.close();
  }
  async generateHashToQrcode() {
    this.showLoading = true;
    const hashReponse =
    await this.generateHashQrcodeService
      .post()
      .pipe(takeUntil(this.destroy$))
      .toPromise();
    this.showLoading = false;
    this.qrCodeHash = hashReponse.data.hash;
    this.readHashQrcode();
  }
  async readHashQrcode() {
    this.loginQrcodeConnectorService.connectWebSOcket(this.qrCodeHash);
  }

}
