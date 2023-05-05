import { takeUntil } from 'rxjs/operators';
import { nameValidatorSpecialCharacteres } from 'src/app/shared/validators/name/name-special-characteres.validator';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { State } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { EnumUserType } from 'src/app/shared/enum/user-types/user-type.enum';
import { IAppState } from 'src/app/state-management/app.model';
import { nameValidatorFormatInvalid } from 'src/app/shared/validators/name/name-format-invalid.validator';
import { inputsSpecialPerson, searchSpecialPerson } from 'src/app/pages/continue-register/components/register-data/consts/inputs-special-person.const';
import { GetSelectsSpecialPersonService } from 'src/app/shared/functions/get-selects-special-person/get-selects-special-person.service';
import { Observable, ReplaySubject } from 'rxjs';
import { EnumControlsSpecialPerson } from 'src/app/pages/continue-register/components/register-data/enum/constrols-inputs-special-person.enum';
import { UpdateDataService } from 'src/app/core/services/update-data/update-data.service';
import { MatSelect } from '@angular/material/select';
import { Scroll } from '@angular/router';
import { EnumControlsForm } from 'src/app/shared/enum/controls-form/controls-form';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.scss']
})
export class EditAboutMeComponent implements OnInit {
  dataTexts;

  specialAccount = false;
  usageLaguage;

  laguagesApplication = EnumLanguages;
  formGroup: FormGroup;

  currentPageCid = 1;
  currentPageMedicalProcedures = 1;
  currentPageMedicalDrugs = 1;
  currentPageMedicalHospitals = 1;

  filteredCids: any[] = [];
  filteredMedicalProcedures: any[] = [];
  filteredDrugs: any[] = [];
  filteredHosptals: any[] = [];

  cidsSelecteds: any[];

  showWasBorn = false;

  destroy$ = new ReplaySubject(1);

  @ViewChild('cids') selectElemCids: MatSelect;
  @ViewChild('medicalProcedures') selectElemMedicalProcedures: MatSelect;
  @ViewChild('drugs') selectElemDrugs: MatSelect;
  @ViewChild('hospitals') selectElemHospitals: MatSelect;

  @ViewChild('searchCids') inputElemCids: ElementRef;
  @ViewChild('searchMedicalProcedures') inputElemMedicalProcedures: ElementRef;
  @ViewChild('searchDrugs') inputElemDrugs: ElementRef;
  @ViewChild('searchHospitals') inputElemHospitals: ElementRef;
  constructor(
    protected state: State<IAppState>,
    private matDialogRef: MatDialogRef<EditAboutMeComponent>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private getSelectsSpecialPersonService: GetSelectsSpecialPersonService,
    private updateDataService: UpdateDataService,


  ) {
    this.dataTexts = this.translateService?.textTranslate;
    this.usageLaguage = this.translateService?.dataFormatation;

  }

  async ngOnInit() {
    this.initForm();

    if (this.state.getValue()?.userData?.data?.account_type == EnumUserType.SPECIAL) {
      this.specialAccount = true;
      this.addControlsTypeSpecial();
    };
    this.setInitialValues()
  }
  private initForm() {
    this.formGroup = this.formBuilder.group({
      profile_picture: this.formBuilder.array([]),
      name: [
        '',
        [
          nameValidatorSpecialCharacteres,
          nameValidatorFormatInvalid,
        ]
      ],
      email: [
        '',
        [
          Validators.email
        ]
      ],
      occupation: [
        ''
      ],
      gender: [
        '',
        [
        ]
      ],
      show_as_gender: [
        '',
        [
        ]
      ],
      sexual_orientation: [
        '',
        [
        ]
      ],
      about: [
        '',
        [
        ]
      ]

    })
  }
  addControlsTypeSpecial(): void {
    const controlsSpecial = [
      ...searchSpecialPerson,
      ...inputsSpecialPerson,
    ]
    controlsSpecial.forEach((value: string) => {
      this.formGroup
        .addControl(
          value,
          this.formBuilder.control('',));
    });
  }
  removeControlsIputSearchSpecialThings() {
    const controlsSpecial = [
      ...searchSpecialPerson,
      ...inputsSpecialPerson,
      'profile_picture'
    ];
    controlsSpecial.forEach((value: string) => {
      this.formGroup.removeControl(value);
    });
  }

  genderChanged(value) {
    if (value === 'trans') {
      this.showWasBorn = true;
      return this.showWasBorn;
    }
    this.formGroup.get('show_as_gender').setValue(value);
    this.showWasBorn = false;
    return this.showWasBorn;
  }
  setInitialValues() {
    const userData = this.state.getValue()?.userData?.data;
    this.formGroup.patchValue({
      ...userData,
    });
  }
  setCids(cids) {
    this.formGroup.get(EnumControlsForm.myCids)
    .setValue(cids);
  }
  setDrugs(drugs) {
    this.formGroup.get(EnumControlsSpecialPerson.MY_DRUGS)
    .setValue(drugs);
  }
  setMedicalProcedures(medicalProcedures) {
    this.formGroup.get(EnumControlsSpecialPerson.MEDICAL_PROCEDURES)
    .setValue(medicalProcedures);
  }
  setHospitals(hospitals) {
    this.formGroup.get(EnumControlsSpecialPerson.MY_HOSPTALS)
    .setValue(hospitals);
  }
  changeViewValueSexualOrientation(value) {
    return this.formGroup.get('sexual_orientation').value || value;
  }
  changeViewValueGender(value) {
    return this.formGroup.get('gender').value || value;
  }
  compareFunction(o1: any, o2: any) {
    return (o1.name == o2.name && o1.id == o2.id);
  }
  async saveDataEdited() {
    let updateData;
    let disabilitys;
    if(this.specialAccount) {
      disabilitys = {
        cid: this.addKeyInDisabilitys(this.formGroup.get(EnumControlsForm.myCids).value),
        medical_procedures: this.addKeyInDisabilitys(this.formGroup.get(EnumControlsForm.medicalProcedures).value),
        drugs: this.addKeyInDisabilitys(this.formGroup.get('my_drugs').value),
        hospitals: this.addKeyInDisabilitys(this.formGroup.get('my_hospitals').value),
      }
    }

    this.removeControlsIputSearchSpecialThings();
    updateData = {
      ...this.formGroup.value,
    }
    if (this.specialAccount) {
      updateData = {
        ...this.formGroup.value,
        disability: disabilitys
      }
    }
    await this.updateDataService.post(updateData, this.state.getValue()?.userData?.data.id).toPromise();
    setTimeout(() => {
      this.closeModal('saved');

    }, 500);
  }
  addKeyInDisabilitys(value) {
    let newArrayValue = [];
    value.forEach(element => {
      newArrayValue.push( {id: element})
    });
    return newArrayValue;
  }
  closeModal(action: string = 'close') {
    this.matDialogRef.close(action);
  }
}
