import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-change-user-type',
  templateUrl: './change-user-type.component.html',
  styleUrls: ['./change-user-type.component.scss']
})
export class ChangeUserTypeComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;
   }

  ngOnInit() {
  }

}
