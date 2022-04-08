import { TranslateService } from './../../../core/services/translate/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dataTexts;
  buttonsDownload;
  constructor(
    private translateService: TranslateService,
    ) {

    }
  ngOnInit() {
    this.dataTexts = this.translateService.textTranslate;
    this.buttonsDownload = this.dataTexts.buttonsDownload;
  }

}
