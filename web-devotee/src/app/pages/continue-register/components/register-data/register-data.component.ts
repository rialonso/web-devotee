import { State, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { ImagesTypes } from './enum/images-type.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidatorSpecialCharacteres } from 'src/app/shared/validators/name/name-special-characteres.validator';
import { ErrorsEnum } from 'src/app/shared/enum/errors/errors.enum';
import { EnumUserType } from 'src/app/shared/enum/user-types/user-type.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import moment from 'moment';
import { ChangeMaskService } from 'src/app/shared/functions/change-mask/change-mask.service';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { EnumFormatsInputs } from 'src/app/shared/enum/formats-inputs/formats-inputs.enum';
import { ReplaySubject } from 'rxjs';
import { ProfilePicturesService } from 'src/app/core/services/profile-pictures/profile-pictures.service';
import { environment } from 'src/environments/environment';
import { GetSelectsSpecialPersonService } from 'src/app/shared/functions/get-selects-special-person/get-selects-special-person.service';
import { inputsSpecialPerson } from './consts/inputs-special-person.const';
import { EnumControlsSpecialPerson } from './enum/constrols-inputs-special-person.enum';
import { UpdateDataService } from 'src/app/core/services/update-data/update-data.service';
import { EnumGenders } from 'src/app/shared/enum/genders/genders.enum';
import { EnumControlsForm } from 'src/app/shared/enum/controls-form/controls-form';
import { ValueAboutME } from './enum/values-edit-about-me/values-edit-about-me.enum';

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
  activeLocation = false;

  minDate;
  maxDate;
  dateFormatedToSend;

  filteredHosptals: any[];


  destroy$ = new ReplaySubject(1);
  constructor(
    protected store: Store,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private routeService: RouteService,
    private dialogsService: DialogsService,
    private changeMaskService: ChangeMaskService,
    private profilePicturesService: ProfilePicturesService,
    private getSelectsSpecialPersonService: GetSelectsSpecialPersonService,
    private updateDataService: UpdateDataService,



  ) {
    this.dataTexts = this.translateService?.textTranslate;
    this.usageLaguage = translateService?.dataFormatation;
    this.minDate = moment().subtract(100, 'years').toDate();
    this.maxDate = moment().subtract(18, 'years').toDate();
  }
  async ngOnInit() {
    this.initForm();
    if (this.state.getValue()?.registerData?.account_type === EnumUserType.SPECIAL) {
      this.specialAccount = true;
      this.addControlsTypeSpecial();
    };
    this.setInitialValues()
    this.setDataInFormWheDataRecovered();
    this.openModalActivateLocation();
  }
  setInitialValues() {
    const userData = this.state.getValue()?.userData?.data;
    this.formGroup.patchValue({
      ...userData,
    });
  }
  setDataInFormWheDataRecovered() {
    const registerData = this.state.getValue()?.registerData
    if (registerData.profile_picture !== null) {
      if (registerData?.profile_picture[0]) {
        this.imagesURL = {
          ...this.imagesURL,
          [this.imagesTypes.FIRST_IMAGE]: `${environment.urlImages}${registerData?.profile_picture[0]?.path}`
        }
      } else {
        this.imagesURL = {
          ...this.imagesURL,
        }
      }
    }

    this.formGroup.patchValue(
      {
        ...this.state.getValue()?.registerData
      }
    );
  }
  private initForm() {
    this.formGroup = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          nameValidatorSpecialCharacteres,
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
    if (files && files[0]) {
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
    const controlsSpecial = inputsSpecialPerson;
    controlsSpecial.forEach((value: string) => {
        this.formGroup
        .addControl(
          value,
          this.formBuilder.control('', Validators.required));
    });
  }
  removeControlsIputSearchSpecialThings() {
    return new Promise<boolean>((resolve, reject) => {
      const controlsSpecial = inputsSpecialPerson;
      controlsSpecial.forEach((value: string) => {
        this.formGroup.removeControl(value);
      });
      resolve(true);
    })

  }
  navigateTo(route: EnumRoutesApplication) {
    this.routeService.navigateToURL(route);
  }
  openModalActivateLocation() {

    if ((!this.state.getValue()?.registerData.lat
      && !this.state.getValue()?.registerData.lng) || this.state.getValue()?.registerData.address_description == null) {

      this.dialogsService
      .openActivateLocation()
      .afterClosed()
      .subscribe( c => {
        this.getSelectsSpecialPersonService
        .getHosptals().then(res => {
          this.filteredHosptals = res.data;
          this.activeLocation = true;
        });
      });
    } else {
      this.activeLocation = true;
    }
    if (this.state.getValue()?.userData.data.lat && this.state.getValue()?.userData.data.lat) {
      this.activeLocation = true;
      return true;
    }
  }
  async continueRegister() {
    if (this.formGroup.valid) {
      this.loading = true;
      let updateData;
      const disabilitys = {
        cid: this.addKeyInDisabilitys(this.formGroup.get(EnumControlsSpecialPerson.MY_CIDS)?.value),
        medical_procedures: this.addKeyInDisabilitys(this.formGroup.get(EnumControlsSpecialPerson.MEDICAL_PROCEDURES)?.value),
        drugs: this.addKeyInDisabilitys(this.formGroup.get(EnumControlsSpecialPerson.MY_DRUGS)?.value),
        hospitals: this.addKeyInDisabilitys(this.formGroup.get(EnumControlsSpecialPerson.MY_HOSPTALS)?.value),
      }
      //
      await this.removeControlsIputSearchSpecialThings();

      updateData = {
        ...this.formGroup.value,
        lat: this.state.getValue()?.registerData?.lat,
        lng: this.state.getValue()?.registerData?.lng,
        target_gender: this.changeTargetGender(),
        birthdate: moment(new Date(this.formGroup.get('birthdate')?.value)).format('YYYY-MM-DD'),
        address_description: this.state.getValue()?.registerData?.address_description
      }

      if (this.state.getValue()?.registerData?.account_type === EnumUserType.SPECIAL) {
        updateData = {
          ...updateData,
          disability: disabilitys
        }
      }
      if(this.imagesList.length > 0) {
        await this.profilePicturesService.post(this.setFormDataToSendFiles()).toPromise();
      }
      await this.updateDataService.post(updateData, this.state.getValue().userData.data.id).toPromise();
      this.loading = false;
      this.navigateTo(EnumRoutesApplication.MATCHS);
    }

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
        newArrayValue.push(  {id: element});
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
    if (
        value !== ValueAboutME.MALE
        && value !== ValueAboutME.MAN
        && value !== ValueAboutME.FEMALE
        && value !== ValueAboutME.WOMEN
      ) {
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
}
