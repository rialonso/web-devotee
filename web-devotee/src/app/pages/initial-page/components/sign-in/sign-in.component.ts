import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  openMobileSignIn = true;
  dataTexts;

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }
  clickopenMobileSignIn(): void {
    this.openMobileSignIn = !this.openMobileSignIn;
  }

}
