import { Component, OnInit } from '@angular/core';
import { TranslateService } from './core/services/translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-devotee';
  constructor(
    private translateService: TranslateService
    ) {}
  ngOnInit(): void {
    this.translateService.veriyLanguage();

  }
}
