import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss']
})
export class HeaderLoggedComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

   }

  ngOnInit() {
  }

}
