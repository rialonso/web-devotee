import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  dataTexts;
  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;

  }

}
