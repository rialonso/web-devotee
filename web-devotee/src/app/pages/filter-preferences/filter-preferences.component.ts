import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-filter-preferences',
  templateUrl: './filter-preferences.component.html',
  styleUrls: ['./filter-preferences.component.scss']
})
export class FilterPreferencesComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }

}
