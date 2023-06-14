import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { State } from '@ngrx/store';
import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { UpdateDataService } from 'src/app/core/services/update-data/update-data.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { IAppState } from 'src/app/state-management/app.model';
import { StateManagementFuncService } from '../../shared/functions/state-management/state-management-func.service';

@Component({
  selector: 'app-filter-preferences',
  templateUrl: './filter-preferences.component.html',
  styleUrls: ['./filter-preferences.component.scss']
})
export class FilterPreferencesComponent implements OnInit {
  dataTexts;

  formGroup: FormGroup;
  constructor(
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private location: Location,
    private formBuilder: FormBuilder,
    private updateDataService: UpdateDataService,
    private routerService: RouteService,
    private snackBarService: SnackBarService,
    private stateManagementFuncService: StateManagementFuncService,
  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.initForm();
    this.setValuesRegitered();
  }
  private initForm() {
    this.formGroup = this.formBuilder.group({
      max_distance: [
        '',
      ],
      target_gender: [
        ''
      ],
      target_account_type: [
        ''
      ],
      relationship_type: [
        ''
      ],
      age_min: [
        ''
      ],
      age_max: [
        ''
      ]
    })
  }
  returnBackRoute() {
    this.location.back();
  }
  setValuesRegitered() {
    // const
    console.log(this.state.getValue()?.userData?.data);
    this.formGroup.patchValue(
      {
        ...this.state.getValue()?.userData?.data
      }
    )
  }
  async setFilters() {
    const stateUser = this.state.getValue()?.userData?.data;
    const dataUpdate = {
      ...stateUser,
      ...this.formGroup.value
    }
    const data = await this.updateDataService.post(dataUpdate, stateUser.id).toPromise();
    this.stateManagementFuncService.funcAddAllDataUser(data);
    this.snackBarService.openSnackbarSuccess(
      this.dataTexts.snacksBars.successSaveFilters.mensage,
      this.dataTexts.snacksBars.successSaveFilters.button);
    this.navigateTo(EnumRoutesApplication.MATCHS);
  }
  navigateTo(route: string) {
    this.routerService.navigateToURL(route);
  }
}
