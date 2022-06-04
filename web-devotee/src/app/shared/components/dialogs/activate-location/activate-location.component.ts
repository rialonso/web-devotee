import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-activate-location',
  templateUrl: './activate-location.component.html',
  styleUrls: ['./activate-location.component.scss']
})
export class ActivateLocationComponent implements OnInit {
  dataTexts
  constructor(
    private translateService: TranslateService,
  ) {

   }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
  }

}
