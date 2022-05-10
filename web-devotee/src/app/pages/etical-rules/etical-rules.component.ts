import { ModelCardImgTitleText } from './../../shared/model/card-img-title-text/card-img-title-text.model';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { icon, idsRules } from './enum/card-img-title-text.enum';

@Component({
  selector: 'app-etical-rules',
  templateUrl: './etical-rules.component.html',
  styleUrls: ['./etical-rules.component.scss']
})
export class EticalRulesComponent implements OnInit {
  dataTexts;

  firstRule: ModelCardImgTitleText;
  secondRule: ModelCardImgTitleText;
  thirdRule: ModelCardImgTitleText;

  constructor(
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;
    this.generateDataForCardRules();
   }

  ngOnInit() {

  }
  generateDataForCardRules() {
    const rulesTranslated = this.dataTexts.eticalRules.rules;
    this.firstRule = new ModelCardImgTitleText(
      idsRules.FIRST_RULE,
      icon.CHECK_MAGENTA,
      rulesTranslated.firstRule.title,
      rulesTranslated.firstRule.text
    );
    this.secondRule = new ModelCardImgTitleText(
      idsRules.SECOND_RULE,
      icon.CHECK_MAGENTA,
      rulesTranslated.secondRule.title,
      rulesTranslated.secondRule.text
    );
    this.thirdRule = new ModelCardImgTitleText(
      idsRules.THIRD_RULE,
      icon.CHECK_MAGENTA,
      rulesTranslated.thirdRule.title,
      rulesTranslated.thirdRule.text
    );
  }
}
