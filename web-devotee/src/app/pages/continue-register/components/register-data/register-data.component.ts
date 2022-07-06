import { startWith, map, takeUntil } from 'rxjs/operators';
import { StateManagementFuncService } from 'src/app/shared/functions/state-management/state-management-func.service';
import { State, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { ImagesTypes } from './enum/images-type.enum';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidatorSpecialCharacteres } from 'src/app/shared/validators/name/name-special-characteres.validator';
import { nameValidatorFormatInvalid } from 'src/app/shared/validators/name/name-format-invalid.validator';
import { ErrorsEnum } from 'src/app/shared/enum/errors/errors.enum';
import { EnumUserType } from 'src/app/shared/enum/user-types/user-type.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import moment from 'moment';
import { ChangeMaskService } from 'src/app/shared/functions/change-mask/change-mask.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { EnumFormatsInputs } from 'src/app/shared/enum/formats-inputs/formats-inputs.enum';
import { GetCidsService } from 'src/app/core/services/get-cids/get-cids.service';
import { GetHosptalsService } from 'src/app/core/services/get-hosptals/get-hosptals.service';
import { GetMedicalProceduresService } from 'src/app/core/services/get-medical-procedures/get-medical-procedures.service';
import { ModelCidsResponse } from 'src/app/shared/model/response/get-cids/get-cids.model';
import { Observable, ReplaySubject } from 'rxjs';
import { GetMedicinesService } from 'src/app/core/services/get-medicines/get-medicines.service';
import { EnumItensResponseTypeSpecial } from './enum/itens-response.enum';
import { Params } from '@angular/router';
import { AddDataRegister } from 'src/app/state-management/register/register.action';
import { RegisterService } from 'src/app/core/services/register/register.service';
import { ProfilePicturesService } from 'src/app/core/services/profile-pictures/profile-pictures.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetSelectsSpecialPersonService } from 'src/app/shared/functions/get-selects-special-person/get-selects-special-person.service';
import { inputsSpecialPerson, searchSpecialPerson } from './consts/inputs-special-person.const';
import { EnumControlsSpecialPerson } from './enum/constrols-inputs-special-person.enum';
import { UpdateDataService } from 'src/app/core/services/update-data/update-data.service';
import { EnumGenders } from 'src/app/shared/enum/genders/genders.enum';

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent implements OnInit {
  dataTexts;
  imagesURL;
  genderList;
  sexualOrientationList;

  laguagesApplication = EnumLanguages
  usageLaguage: string;

  imagesTypes = ImagesTypes;
  errorsEnum = ErrorsEnum;
  enumRouterApp = EnumRoutesApplication;

  imagesList = [];
  formGroup: FormGroup;
  specialAccount = false;
  showWasBorn = false;
  loading = false;

  minDate;
  maxDate;
  dateFormatedToSend;

  filteredCids: Observable<any[]>;
  filteredMedicalProcedures: Observable<any[]>;
  filteredDrugs: Observable<any[]>;
  filteredHosptals: Observable<any[]>;

  destroy$ = new ReplaySubject(1);
  constructor(
    protected store: Store,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private routeService: RouteService,
    private dialogsService: DialogsService,
    private changeMaskService: ChangeMaskService,
    private stateManagementFuncService: StateManagementFuncService,
    private registerService: RegisterService,
    private profilePicturesService: ProfilePicturesService,
    private getSelectsSpecialPersonService: GetSelectsSpecialPersonService,
    private updateDataService: UpdateDataService,



  ) {
    this.dataTexts = this.translateService?.textTranslate;
    this.usageLaguage = translateService?.dataFormatation;
    this.minDate = moment().subtract(100, 'years').toDate();
    this.maxDate = moment().subtract(18, 'years').toDate();
  }
  ngOnInit() {
    this.initForm();
    if (this.state.getValue()?.registerData?.account_type === EnumUserType.SPECIAL) {
      this.specialAccount = true;
      this.addControlsTypeSpecial();
      this.getDatasSelectTypeSpecial();
      this.valueChangesInputsSearchSelects();

    };
    this.openModalActivateLocation();
  }
  private initForm() {
    this.formGroup = this.formBuilder.group({
      profile_picture: this.formBuilder.array([]),
      name: [
        '',
        [
          Validators.required,
          nameValidatorSpecialCharacteres,
          nameValidatorFormatInvalid,
        ]
      ],
      occupation: [
        ''
      ],
      birthdate: [
        '',
        [
          Validators.required,
        ]
      ],
      gender: [
        '',
        [
          Validators.required,
        ]
      ],
      show_as_gender: [
        '',
        [
          Validators.required,
        ]
      ],
      sexual_orientation: [
        '',
        [
          Validators.required,
        ]
      ],
      about: [
        '',
        [
          Validators.required,
        ]
      ]

    })
  }
  selectedImage(files: File, imageType: ImagesTypes) {
    const controlPictures = this.formGroup.get('profile_picture');
    if (files && files[0]) {
      (controlPictures as FormArray).push(this.formBuilder.group(files[0]));
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        switch (imageType) {
          case ImagesTypes.FIRST_IMAGE:
            this.addImagesURL(ImagesTypes.FIRST_IMAGE, evt.target.result);
            this.imagesList[0] = files[0];
            break;
          case ImagesTypes.SECOND_IMAGE:
            this.addImagesURL(ImagesTypes.SECOND_IMAGE, evt.target.result);
            this.imagesList[1] = files[0];
            break;
          case ImagesTypes.THIRD_IMAGE:
            this.addImagesURL(ImagesTypes.THIRD_IMAGE, evt.target.result);
            this.imagesList[2] = files[0];
            break;
          case ImagesTypes.FORTY_IMAGE:
            this.addImagesURL(ImagesTypes.FORTY_IMAGE, evt.target.result);
            this.imagesList[3] = files[0];
            break;
          default:
            break;
        }
      };
    }
  }
  addImagesURL(key, value) {
    this.imagesURL = {
      ...this.imagesURL,
      [key]: value
    }
  }
  get controlsForm() { return this.formGroup.controls; }
  addControlsTypeSpecial(): void {
    const controlsSpecial = [
      ...searchSpecialPerson,
      ...inputsSpecialPerson,
    ]
    controlsSpecial.forEach((value: string) => {
      if (value.includes('input_')) {
        this.formGroup
        .addControl(
          value,
          this.formBuilder.control(''));
      }else {
        this.formGroup
        .addControl(
          value,
          this.formBuilder.control('', Validators.required));
      }

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
  navigateTo(route: EnumRoutesApplication) {
    this.routeService.navigateToURL(route);
  }
  openModalActivateLocation() {
    this.dialogsService
      .openActivateLocation()
      .afterClosed()
      .subscribe( c => {
        this.getSelectsSpecialPersonService
        .getHosptals().then(res => {
          this.filteredHosptals = res.data;
        });
    });
  }
  async continueRegister() {
    this.loading = true;
    let updateData;
    this.store.dispatch(new AddDataRegister({
      ...this.formGroup.value,
      birthdate: this.dateFormatedToSend,
    }));
    updateData = {
      ...this.state.getValue().registerData,
      target_gender: this.changeTargetGender()
    }
    if (this.state.getValue()?.registerData?.account_type === EnumUserType.SPECIAL) {
      updateData = {
        ...updateData,
        disability: this.setDataToSpecialPerson()
      }
    }

    console.log(this.formGroup.value, updateData);

    await this.profilePicturesService.post(this.setFormDataToSendFiles()).toPromise();
    await this.updateDataService.post(updateData, this.state.getValue().userData.data.id).toPromise();
    this.loading = false;
    // this.navigateTo(EnumRoutesApplication.MATCHS);
  }
  setDataToSpecialPerson() {
    const disabilitys = {
      cid: this.addKeyInDisabilitys(this.formGroup.get('my_cids').value),
      medical_procedures: this.addKeyInDisabilitys(this.formGroup.get('medical_procedures').value),
      drugs: this.addKeyInDisabilitys(this.formGroup.get('my_drugs').value),
      hospitals: this.addKeyInDisabilitys(this.formGroup.get('my_hospitals').value),
    }
    this.removeControlsIputSearchSpecialThings();
    return disabilitys;
  }
  changeTargetGender() {
    if (this.formGroup.get('show_as_gender').value === EnumGenders.MALE) {
      return EnumGenders.FEMALE;
    } else if (this.formGroup.get('show_as_gender').value === EnumGenders.FEMALE) {
      return EnumGenders.MALE;
    }
  }
  addKeyInDisabilitys(value) {
    let newArrayValue = [];
    if (value) {
      value.forEach(element => {
        newArrayValue.push(  element);
      });
    }

    return newArrayValue;
  }
  setFormDataToSendFiles() {
    const formData = new FormData();
    for (let i = 0; i < this.imagesList.length; i++) {
      formData.append('image[]', this.imagesList[i]);
    }
    return formData;
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

  setSpecifyValueInRegisterState(key: string, value: any) {
    this.formGroup.get(key).setValue(value);
  }
  dateSelected(event) {
    const dateMoment = moment(event.value);
    const birthDateFormated = dateMoment.format(this.changeMaskService.changeMaskBirthDate());
    this.dateFormatedToSend = dateMoment.format(EnumFormatsInputs.dateToSend)
    this.setSpecifyValueInRegisterState('birthdate', birthDateFormated);
  }
  getDatasSelectTypeSpecial() {
    this.getSelectsSpecialPersonService
      .getCids().then(res => {
        this.filteredCids = res.data;
      });
    this.getSelectsSpecialPersonService
      .getMedicalProcedures().then(res => {
        this.filteredMedicalProcedures = res.data;
      });
    this.getSelectsSpecialPersonService
      .getDrugsMedicines().then(res => {
        this.filteredDrugs = res.data;
      });

  }
  valueChangesInputsSearchSelects() {
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MY_CID)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getCids(res)
          .then(selectData => {
            this.filteredCids = selectData.data;
        })
      });
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MY_DRUGS)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getDrugsMedicines(res)
          .then(selectData => {
            this.filteredDrugs = selectData.data;
        })
      });
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MEDICAL_PROCEDURES)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getMedicalProcedures(res)
          .then(selectData => {
            this.filteredMedicalProcedures = selectData.data;
        })
      });
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MY_HOSPTALS)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getHosptals(res)
          .then(selectData => {
            this.filteredHosptals = selectData.data;
        })
      });
  }
}
