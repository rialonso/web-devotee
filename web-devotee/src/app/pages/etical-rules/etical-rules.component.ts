import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { ModelCardImgTitleText } from './../../shared/model/card-img-title-text/card-img-title-text.model';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { icon, idsRules } from './enum/card-img-title-text.enum';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';

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

  enumRoutes = EnumRoutesApplication
  constructor(
    private translateService: TranslateService,
    private routeService: RouteService
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
  navigateTo(route: string): void {
    this.routeService.navigateToURL(route);
  }
}
