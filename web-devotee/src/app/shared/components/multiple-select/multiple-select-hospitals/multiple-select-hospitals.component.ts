import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { State } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { EnumControlsSpecialPerson } from 'src/app/pages/continue-register/components/register-data/enum/constrols-inputs-special-person.enum';
import { EnumControlsForm } from 'src/app/shared/enum/controls-form/controls-form';
import { EnumLanguages } from 'src/app/shared/enum/languages/languages.enum';
import { GetSelectsSpecialPersonService } from 'src/app/shared/functions/get-selects-special-person/get-selects-special-person.service';
import { IAppState } from 'src/app/state-management/app.model';

@Component({
  selector: 'app-multiple-select-hospitals',
  templateUrl: './multiple-select-hospitals.component.html',
  styleUrls: ['./multiple-select-hospitals.component.scss']
})
export class MultipleSelectHospitalsComponent implements OnInit {
  @ViewChild('hospitals') selectElemHospitals: MatSelect;
  @ViewChild('searchHospitals') inputElemHospitals: ElementRef;
  @Output() selectedHospitals = new EventEmitter();

  @Input() filteredHospitalsLatLong = [];
  laguagesApplication = EnumLanguages;

  dataTexts;

  usageLaguage;
  formGroup: FormGroup;

  currentPageMedicalHospitals = 1;

  filteredHosptals: any[] = [];

  destroy$ = new ReplaySubject(1);
  constructor(
    protected state: State<IAppState>,
    private getSelectsSpecialPersonService: GetSelectsSpecialPersonService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
  ) {
    this.dataTexts = this.translateService?.textTranslate;
    this.usageLaguage = this.translateService?.dataFormatation;
  }

  ngOnInit(): void {
    const userData = this.state.getValue()?.userData?.data;

    this.initForm();
    if (userData.lat && userData.lng) {
      this.getHospitals(undefined, undefined, true);
    } else {
      this.filteredHosptals = this.filteredHospitalsLatLong;
    }
    this.valueChangesInputsSearchSelects();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({

      my_hospitals: [
        '',
        [
        ]
      ],
      input_my_hospitals: [
        '',
        [
        ]
      ]

    })
  }
  valueChangesInputsSearchSelects() {
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
      this.formGroup
      .get(EnumControlsSpecialPerson.MY_HOSPTALS)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.selectedHospitals.emit(res);
      });
  }
  getHospitals(pg= 1, search = '', init = false) {
    this.getSelectsSpecialPersonService
    .getHosptalsLogged(search, pg).then(res => {
      this.currentPageMedicalHospitals = res.current_page + 1;
      this.filteredHosptals.push(...res.data);
        if (search == ''&& init) {
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
    this.filteredHosptals.push(newFiltered);
    this.formGroup.get('my_hospitals')
        .setValue(hospital);

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
      if (this.inputElemHospitals?.nativeElement.value == '') {
        this.getHospitals(this.currentPageMedicalHospitals);
      }
    }
  }
  searchHospital(value: string) {
    this.getHospitals(undefined, value);
  }
}
