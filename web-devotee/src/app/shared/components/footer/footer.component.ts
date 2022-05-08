import { TranslateService } from './../../../core/services/translate/translate.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() backgroudColor: string;

  dataTexts;
  buttonsDownload;
  copyright: string;
  constructor(
    private translateService: TranslateService,
    ) {
      this.dataTexts = this.translateService.textTranslate;
      this.buttonsDownload = this.dataTexts.buttonsDownload;
      this.copyright = ` Copyright © ${new Date().getFullYear()} ${this.dataTexts.copyright}`;
    }
  ngOnInit(): void {


  }

}
