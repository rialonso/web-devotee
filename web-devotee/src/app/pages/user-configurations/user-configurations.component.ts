import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-user-configurations',
  templateUrl: './user-configurations.component.html',
  styleUrls: ['./user-configurations.component.scss']
})
export class UserConfigurationsComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;

  }

}
