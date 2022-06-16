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

  imagesTypes = ImagesTypes;
  errorsEnum = ErrorsEnum;
  enumRouterApp = EnumRoutesApplication;

  formGroup: FormGroup;
  specialAccount = false;
  showWasBorn = false;

  minDate;
  maxDate;
  constructor(
    protected store: Store,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private routeService: RouteService,
    private dialogsService: DialogsService,
    private changeMaskService: ChangeMaskService,
    private stateManagementFuncService: StateManagementFuncService
  ) {
    this.dataTexts = this.translateService?.textTranslate;
    const currentYear = new Date().getFullYear();
    this.minDate = moment().subtract(100, 'years').toDate();
    this.maxDate = moment().subtract(18, 'years').toDate();
  }
  ngOnInit() {
    this.initForm();
    this.changeConfigToBirthdate()
    if (this.state.getValue()?.registerData?.account_type === EnumUserType.SPECIAL) {
        this.specialAccount = true;
      this.addControlsTypeSpecial();
    };
    this.getEmailWithPreRegister();
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
  changeConfigToBirthdate() {
    console.log(this.minDate);
  }
  changeBirthDateMask() {

  }
  selectedImage(files: File, imageType: ImagesTypes) {
    const controlPictures = this.formGroup.get('profile_picture');
    if (files && files[0]) {
      (controlPictures as FormArray).push(this.formBuilder.group(files[0]));
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        switch (imageType) {
          case ImagesTypes.PROFILE_URL:
            this.addImagesURL(ImagesTypes.PROFILE_URL, evt.target.result)
            break;
          case ImagesTypes.FIRST_IMAGE:
            this.addImagesURL(ImagesTypes.FIRST_IMAGE, evt.target.result)
            break;
          case ImagesTypes.SECOND_IMAGE:
            this.addImagesURL(ImagesTypes.SECOND_IMAGE, evt.target.result)
            break;
          case ImagesTypes.THIRD_IMAGE:
            this.addImagesURL(ImagesTypes.THIRD_IMAGE, evt.target.result)
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
      'my_hospitals',
      'my_drugs',
      'medical_procedures',
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

    });
  }
  continueRegister() {
    this.openModalActivateLocation();
  }
  genderChanged(value) {
    console.log(value);
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
}
