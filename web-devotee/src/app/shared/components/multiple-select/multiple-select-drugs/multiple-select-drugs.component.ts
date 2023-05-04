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
  selector: 'app-multiple-select-drugs',
  templateUrl: './multiple-select-drugs.component.html',
  styleUrls: ['./multiple-select-drugs.component.scss']
})
export class MultipleSelectDrugsComponent implements OnInit {
  @ViewChild('drugs') selectElemDrugs: MatSelect;
  @ViewChild('searchDrugs') inputElemDrugs: ElementRef;
  @Output() selectedDrugs = new EventEmitter();
  laguagesApplication = EnumLanguages;

  dataTexts;

  usageLaguage;
  formGroup: FormGroup;

  currentPageMedicalDrugs = 1;

  filteredDrugs: any[] = [];

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
    this.getDrugs(undefined, undefined, true);
    this.valueChangesInputsSearchSelects();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({

      my_drugs: [
        '',
        [
        ]
      ],
      input_my_drugs: [
        '',
        [
        ]
      ]

    })
  }
  valueChangesInputsSearchSelects() {
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
      .get(EnumControlsSpecialPerson.MY_DRUGS)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.selectedDrugs.emit(res);
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
    var b = new Set(newFiltered);
    let difference = [...this.filteredDrugs].filter(x => !b.has(x));
    newFiltered.push(difference);
    this.filteredDrugs.push(newFiltered);
    this.formGroup.get('my_drugs')
      .setValue(drugs);

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

      if (this.inputElemDrugs?.nativeElement.value == '') {
        this.getDrugs(this.currentPageMedicalDrugs);
      }
    }
  }
  searchDrug(value: string) {
    this.getDrugs(undefined, value);
  }
}
