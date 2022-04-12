import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService
    ) {}
  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }

}
