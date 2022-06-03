import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { EnumUserType } from 'src/app/shared/enum/user-types/user-type.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';

@Component({
  selector: 'app-change-user-type',
  templateUrl: './change-user-type.component.html',
  styleUrls: ['./change-user-type.component.scss']
})
export class ChangeUserTypeComponent implements OnInit {
  dataTexts;

  enumUserType = EnumUserType;
  enumRouteApp = EnumRoutesApplication;
  userTypeChanged: EnumUserType;

  formGroup: FormGroup;
  constructor(
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private routeService: RouteService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;
   }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      account_type: [
        '',
        [
          Validators.required,
        ]
      ]
    })
  }
  changeUserType(userType: EnumUserType) {
    this.userTypeChanged = userType;
  }
  navigateTo(route: EnumRoutesApplication) {
    this.routeService.navigateToURL(route);
  }
}
