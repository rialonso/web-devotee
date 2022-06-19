import { startWith, map } from 'rxjs/operators';
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
import { Observable } from 'rxjs';
import { GetMedicinesService } from 'src/app/core/services/get-medicines/get-medicines.service';
import { EnumItensResponseTypeSpecial } from './enum/itens-response.enum';
import { Params } from '@angular/router';

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

  imagesList = []
  formGroup: FormGroup;
  specialAccount = false;
  showWasBorn = false;

  minDate;
  maxDate;

  filteredCids: Observable<any[]>;
  filteredMedicalProcedures: Observable<any[]>;
  filteredDrugs: Observable<any[]>;
  filteredHosptals: Observable<any[]>;

  constructor(
    protected store: Store,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private routeService: RouteService,
    private dialogsService: DialogsService,
    private changeMaskService: ChangeMaskService,
    private stateManagementFuncService: StateManagementFuncService,
    private getCidsService: GetCidsService,
    private getHosptalsService: GetHosptalsService,
    private getMedicalProceduresService: GetMedicalProceduresService,
    private getMedicinesService: GetMedicinesService,


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
    };
    this.getEmailWithPreRegister();
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
      email: [
        '',
        [
          Validators.required,
          Validators.email
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
        console.log(imageType);

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
      'my_cids',
      'input_my_cids',

      'my_hospitals',
      'input_my_hospitals',

      'my_drugs',
      'input_my_drugs',

      'medical_procedures',
      'input_medical_procedures',
    ]
    controlsSpecial.forEach((value: string) => {
      this.formGroup
        .addControl(
          value,
          this.formBuilder.control('', Validators.required));
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
        this.getHosptals();
    });
  }
  continueRegister() {
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
  getEmailWithPreRegister() {
    const email = this.state.getValue()?.registerData?.email;
    this.setSpecifyValueInRegisterState('email', email);
  }
   setSpecifyValueInRegisterState(key: string, value: any) {
    this.formGroup.get(key).setValue(value);
  }
  dateSelected(event) {
    const dateMoment = moment(event.value);
    const birthDateFormated = dateMoment.format(this.changeMaskService.changeMaskBirthDate());
    this.stateManagementFuncService.funcAddDataRegister(dateMoment.format(EnumFormatsInputs.dateToSend))
    this.setSpecifyValueInRegisterState('birthdate', birthDateFormated);
  }
  getDatasSelectTypeSpecial() {
    this.getCids();
    this.getMedicalProcedures();
    this.getDrugsMedicines();

  }
  async getCids() {
   const cids = await this.getCidsService.get().toPromise();
    this.filteredCids = this.formGroup.get('input_my_cids')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const filterValue = value.toLowerCase();
        return this.filterWithDescriptionOrEn(
          cids.data, filterValue,
          EnumItensResponseTypeSpecial.DESCRIPTION,
          EnumItensResponseTypeSpecial.DESCRIPTION_EN);
      }),
    );
  }
  async getMedicalProcedures() {
    const responseSelect = await this.getMedicalProceduresService.get().toPromise();

      this.filteredMedicalProcedures = this.formGroup.get('input_medical_procedures')?.valueChanges.pipe(
        startWith(''),
        map(value => {
          const filterValue = value.toLowerCase();
          return this.filterWithDescriptionOrEn(
            responseSelect.data, filterValue,
            EnumItensResponseTypeSpecial.NAME,
            EnumItensResponseTypeSpecial.NAME_EN);
        }),
      );
  }
  async getDrugsMedicines() {
    const responseSelect = await this.getMedicinesService.get().toPromise();

    this.filteredDrugs = this.formGroup.get('input_my_drugs')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const filterValue = value.toLowerCase();
        return this.filterWithDescriptionOrEn(
            responseSelect.data, filterValue,
            EnumItensResponseTypeSpecial.NAME,
            EnumItensResponseTypeSpecial.NAME_EN);
      }),
    );
  }
  async getHosptals(pg = 1) {
    const registerData = this.state.getValue().registerData;

    const params: Params = {
      lat: registerData.lat,
      lng: registerData.lng,
      page: pg
    }
    console.log(params);

    const responseSelect = await this.getHosptalsService.get(false, params).toPromise();

    this.filteredHosptals = this.formGroup.get('input_my_hospitals')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const filterValue = value.toLowerCase();
        return responseSelect.data.filter(option => option[EnumItensResponseTypeSpecial.NAME].toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
      }),
    );
  }
  filterWithDescriptionOrEn(array, value, keyOptionPt, keyOptionEn) {
    if (this.usageLaguage === this.laguagesApplication.PT) {
      return array.filter(option => option[keyOptionPt].toLowerCase().indexOf(value.toLowerCase()) > -1);
    } else {
      return array.filter(option => option[keyOptionEn].toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
  }
}
