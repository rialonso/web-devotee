import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { State } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { UpdateDataService } from 'src/app/core/services/update-data/update-data.service';
import { IAppState } from 'src/app/state-management/app.model';

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
  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.initForm();
    console.log(this.state.getValue());
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
    console.log(data);

  }
}
