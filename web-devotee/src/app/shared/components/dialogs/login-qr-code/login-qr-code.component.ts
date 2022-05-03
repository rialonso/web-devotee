import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-login-qr-code',
  templateUrl: './login-qr-code.component.html',
  styleUrls: ['./login-qr-code.component.scss']
})
export class LoginQrCodeComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;

  }

}
