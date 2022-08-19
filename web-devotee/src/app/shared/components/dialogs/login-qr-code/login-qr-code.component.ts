import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GenerateHashQrcodeService } from 'src/app/core/services/generate-hash-qrcode/generate-hash-qrcode.service';
import { ReadHashQrcodeService } from 'src/app/core/services/read-hash-qrcode/read-hash-qrcode.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { LoginQrcodeConnectorService } from 'src/app/core/services/websockets/login-qrcode-connector/login-qrcode-connector.service';
import { PusherAuthService } from 'src/app/core/services/websockets/pusher/pusher-auth/pusher-auth.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { StateManagementFuncService } from 'src/app/shared/functions/state-management/state-management-func.service';
import { environment } from 'src/environments/environment';

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
    private stateManagementFuncService: StateManagementFuncService,
    private routeService: RouteService,
    private pusherAuthService: PusherAuthService,
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
  readHashQrcode() {
    this.loginQrcodeConnectorService
      .connectWebSOcket(this.qrCodeHash)
      .bind(environment.webSocket.events.loginQrCode, (res) => {
        localStorage.setItem('access_token', `${res?.payload.access_token}`);
        localStorage.setItem('userId', `${res?.payload.data.id}`);
        this.stateManagementFuncService.funcAddAllDataUser({access_token: res?.payload.access_token, ...res?.payload.data});
        this.routeService.navigateToURL(EnumRoutesApplication.MATCHS);
        this.pusherAuthService
          .pusherConnect()
          .unsubscribe(`${environment.webSocket.channels.loginQrCode}${this.qrCodeHash}`);
      })

  }

}
