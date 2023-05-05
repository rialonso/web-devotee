import { startWith, map, takeUntil } from 'rxjs/operators';
import { StateManagementFuncService } from 'src/app/shared/functions/state-management/state-management-func.service';
import { State, Store } from '@ngrx/store';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { EnumControlsForm } from 'src/app/shared/enum/controls-form/controls-form';
import { MatSelect } from '@angular/material/select';

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

  currentPageCid = 1;
  currentPageMedicalProcedures = 1;
  currentPageMedicalDrugs = 1;
  currentPageMedicalHospitals = 1;

  filteredCids: any[];
  filteredMedicalProcedures: any[];
  filteredDrugs: any[];
  filteredHosptals: any[];


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
  async ngOnInit() {
    this.initForm();
    if (this.state.getValue()?.registerData?.account_type === EnumUserType.SPECIAL) {
      this.specialAccount = true;
      this.addControlsTypeSpecial();
      // await this.getDatasSelectTypeSpecial();
      this.valueChangesInputsSearchSelects();

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
    // const controlPictures = this.formGroup.get('profile_picture');
    if (files && files[0]) {
      // (controlPictures as FormArray).push(this.formBuilder.group(files[0]));
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
    return new Promise<boolean>((resolve, reject) => {
      const controlsSpecial = [
        ...searchSpecialPerson,
        ...inputsSpecialPerson,
      ];
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
    if (!this.state.getValue()?.registerData.lat
      && !this.state.getValue()?.registerData.lng) {
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

  }
  async continueRegister() {
    if (this.formGroup.valid) {
      this.loading = true;
      let updateData;
      // this.store.dispatch(new AddDataRegister({
      //   ...this.formGroup.value,
      //   birthdate: this.dateFormatedToSend,
      // }));
      const disabilitys = {
        cid: this.addKeyInDisabilitys(this.formGroup.get('my_cids').value),
        medical_procedures: this.addKeyInDisabilitys(this.formGroup.get('medical_procedures').value),
        drugs: this.addKeyInDisabilitys(this.formGroup.get('my_drugs').value),
        hospitals: this.addKeyInDisabilitys(this.formGroup.get('my_hospitals').value),
      }
      //
      await this.removeControlsIputSearchSpecialThings();

      updateData = {
        ...this.formGroup.value,
        target_gender: this.changeTargetGender()
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
        value !== 'male'
        && value !== 'man'
        && value !== 'female'
        && value !== 'women'
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
  registerPanelScrollEvent(element, matSelect) {
    const panel = element?.panel?.nativeElement;
    panel?.addEventListener('scroll', event => {
        this.loadAllOnScroll(event, matSelect);
      }
    );
  }

  loadAllOnScroll(event, matSelect) {
    if (event.target.scrollTop +  event.target.offsetHeight == event.target.scrollHeight) {
      switch (matSelect) {
        case EnumControlsForm.myCids:
          if (this.inputElemCids?.nativeElement.value == '') {
            this.getCids(this.currentPageCid);

          }
          break;
        case EnumControlsForm.medicalProcedures:
          if (this.inputElemMedicalProcedures?.nativeElement.value == '') {
            this.getMedicalProcedures(this.currentPageMedicalProcedures);
          }
          break;
        case EnumControlsForm.myDrugs:
          if (this.inputElemDrugs?.nativeElement.value == '') {
            this.getDrugs(this.currentPageMedicalDrugs);
          }
          break;
        case EnumControlsForm.myHospitals:
          if (this.inputElemHospitals?.nativeElement.value == '') {
            this.getHospitals(this.currentPageMedicalHospitals);
          }
          break;
        default:
          break;
      }
      event.target.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  getCids(pg= 1, search = '', init = false) {
    this.getSelectsSpecialPersonService
    .getCids(search, pg).then(res => {
      this.currentPageCid = res.current_page + 1;
      this.filteredCids.push(...res.data);
      if (search == '' && init) {
        this.setCidsInitialValue();
        this.selectElemCids.openedChange.subscribe((a) => {
          if (!a) {
            this.getCids(1);
          }
          this.registerPanelScrollEvent(this.selectElemCids, EnumControlsForm.myCids)
        });
      }

    });
  }
  getMedicalProcedures(pg= 1, search = '', init = false) {
    this.getSelectsSpecialPersonService
    .getMedicalProcedures(search, pg).then(res => {
      this.currentPageMedicalProcedures = res.current_page + 1;
      this.filteredMedicalProcedures.push(...res.data);
      if (search == '' && init) {
        this.setMedicalProceduresInitialValues();

        this.selectElemMedicalProcedures.openedChange.subscribe((a) => {
          if (!a) {
            this.getMedicalProcedures(1);
          }
          this.registerPanelScrollEvent(this.selectElemMedicalProcedures, EnumControlsForm.medicalProcedures)
        });
      }

    });
  }
  getDrugs(pg= 1, search = '', init = false) {
    this.getSelectsSpecialPersonService
    .getDrugsMedicines(search, pg).then(res => {
      this.currentPageMedicalDrugs = res.current_page + 1;
      this.filteredDrugs.push(...res.data);
      if (search == '' && init) {
        this.setDrugsInitialValue();

        this.selectElemDrugs.openedChange.subscribe((a) => {
          if (!a) {
            this.getDrugs(1);
          }
          this.registerPanelScrollEvent(this.selectElemDrugs, EnumControlsForm.myDrugs)
        });
      }

    });
  }
  getHospitals(pg= 1, search = '', init = false) {
    this.getSelectsSpecialPersonService
    .getHosptalsLogged(search, pg).then(res => {
      this.currentPageMedicalHospitals = res.current_page + 1;
      this.filteredHosptals.push(...res.data);
        if (search == '' && init) {
          this.setHospitalsInitialValues();
          this.selectElemHospitals.openedChange.subscribe((a) => {
            if (!a) {
              this.getHospitals(1);
            }
            this.registerPanelScrollEvent(this.selectElemHospitals, EnumControlsForm.myHospitals)
          });
        }
    });
  }
  getDatasSelectTypeSpecial() {
  return new Promise(async (resolve, reject) => {
    this.getCids(undefined, undefined, true);
    this.getMedicalProcedures(undefined, undefined, true);
    this.getDrugs(undefined, undefined, true);
    this.getHospitals(undefined, undefined, true);
    resolve(true);
  })
}
  // getDatasSelectTypeSpecial() {
  //   this.getSelectsSpecialPersonService
  //     .getCids().then(res => {
  //       this.filteredCids = res.data;
  //     });
  //   this.getSelectsSpecialPersonService
  //     .getMedicalProcedures().then(res => {
  //       this.filteredMedicalProcedures = res.data;
  //     });
  //   this.getSelectsSpecialPersonService
  //     .getDrugsMedicines().then(res => {
  //       this.filteredDrugs = res.data;
  //     });
  // }

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
  setMedicalProceduresInitialValues() {
    const userData = this.state.getValue()?.userData?.data;
    let medicalProcedure = [];
    let newFiltered = [];

    userData?.medical_procedures.forEach(element => {
      if(this.filteredMedicalProcedures.find(filteredMedicalProcedure => filteredMedicalProcedure.id != element.medical_procedures.id)) {
        newFiltered.push(element.medical_procedures);
      }
      medicalProcedure.push(element?.medical_procedures?.id);
    });
    let difference = this.filteredMedicalProcedures.filter(x => !newFiltered.includes(x.id));
    newFiltered.push(...difference);
    this.filteredMedicalProcedures = newFiltered;
    this.formGroup.get(EnumControlsForm.medicalProcedures)
      .setValue(medicalProcedure);

  }

  setCidsInitialValue() {
    const userData = this.state.getValue()?.userData?.data;
    let cids = [];
    let newFiltered = [];
    userData?.my_cids.forEach(element => {
      if(this.filteredCids.some(filteredCid => filteredCid.id != element.cid.id)) {
        newFiltered.push(element.cid);
      }
      cids.push(element?.cid.id);
    });
    let difference = this.filteredCids.filter(x => !newFiltered.includes(x.id));
    newFiltered.push(...difference);
    this.filteredCids = newFiltered;
    this.formGroup.get(EnumControlsForm.myCids)
      .setValue(cids);

  }
  setDrugsInitialValue() {
    const userData = this.state.getValue()?.userData?.data;
    let drugs = []
    let newFiltered = [];

    userData?.my_drugs.forEach(element => {
      if(this.filteredDrugs.find(filteredDrug => filteredDrug.id != element.drug.id)) {
        newFiltered.push(element.drug);
      }
      drugs.push(element?.drug.id);
    });
    let difference = this.filteredDrugs.filter(x => !newFiltered.includes(x.id));
    newFiltered.push(...difference);
    this.filteredDrugs = newFiltered;
    this.formGroup.get('my_drugs')
      .setValue(drugs);

  }
  setHospitalsInitialValues() {
    const userData = this.state.getValue()?.userData?.data;

    let hospital = [];
    let newFiltered = [];

    userData?.my_hospitals.forEach(element => {
      if(this.filteredHosptals.find(filteredHospital => filteredHospital.id != element.hospital.id)) {
        newFiltered.push(element.hospital);
      }
      hospital.push(element?.hospital.id);
    });
    let difference = this.filteredHosptals.filter(x => !newFiltered.includes(x.id));
    newFiltered.push(...difference);
    this.filteredHosptals = newFiltered;
    this.formGroup.get('my_hospitals')
        .setValue(hospital);

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
