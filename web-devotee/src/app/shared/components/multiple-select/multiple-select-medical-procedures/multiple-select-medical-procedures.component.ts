import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  selector: 'app-multiple-select-medical-procedures',
  templateUrl: './multiple-select-medical-procedures.component.html',
  styleUrls: ['./multiple-select-medical-procedures.component.scss']
})
export class MultipleSelectMedicalProceduresComponent implements OnInit {
  @ViewChild('medicalProcedures') selectElemMedicalProcedures: MatSelect;
  @ViewChild('searchMedicalProcedures') inputElemMedicalProcedures: ElementRef;
  @Output() selectedMedicalProcedures = new EventEmitter();
  laguagesApplication = EnumLanguages;

  dataTexts;

  usageLaguage;
  formGroup: FormGroup;

  currentPageMedicalProcedures = 1;

  filteredMedicalProcedures: any[] = [];

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
    this.initForm();
    this.getMedicalProcedures(undefined, undefined, true);
    this.valueChangesInputsSearchSelects();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({

      medical_procedures: [
        '',
        [
        ]
      ],
      input_medical_procedures: [
        '',
        [
        ]
      ]

    })
  }
  valueChangesInputsSearchSelects() {
    this.formGroup
      .get(EnumControlsSpecialPerson.INPUT_MEDICAL_PROCEDURES)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.getSelectsSpecialPersonService
          .getDrugsMedicines(res)
          .then(selectData => {
            this.filteredMedicalProcedures = selectData.data;
        })
      });
      this.formGroup
      .get(EnumControlsSpecialPerson.MEDICAL_PROCEDURES)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.selectedMedicalProcedures.emit(res);
      });
  }
  getMedicalProcedures(pg= 1, search = '', init = false) {
    this.getSelectsSpecialPersonService
    .getMedicalProcedures(search, pg).then(res => {
      this.currentPageMedicalProcedures = res.current_page + 1;
      this.filteredMedicalProcedures.push(...res.data);
      if (search == ''&& init) {
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
    this.filteredMedicalProcedures.push(newFiltered);
    this.formGroup.get(EnumControlsForm.medicalProcedures)
      .setValue(medicalProcedure);
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
      if (this.inputElemMedicalProcedures?.nativeElement.value == '') {
        this.getMedicalProcedures(this.currentPageMedicalProcedures);
      }
    }
  }
  searchMedicalProcedure(value: string) {
    this.getMedicalProcedures(undefined, value);
  }
}
