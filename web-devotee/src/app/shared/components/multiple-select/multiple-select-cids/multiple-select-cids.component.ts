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
  selector: 'app-multiple-select-cids',
  templateUrl: './multiple-select-cids.component.html',
  styleUrls: ['./multiple-select-cids.component.scss']
})
export class MultipleSelectCidsComponent implements OnInit {
  @ViewChild('cids') selectElemCids: MatSelect;
  @ViewChild('searchCids') inputElemCids: ElementRef;
  @Output() selectedCids = new EventEmitter();
  dataTexts;

  specialAccount = false;
  usageLaguage;

  laguagesApplication = EnumLanguages;

  currentPageCid = 1;

  filteredCids: any[] = [];

  formGroup: FormGroup;

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
    this.getCids(undefined, undefined, true);
    this.valueChangesInputsSearchSelects();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({

      my_cids: [
        '',
        [
        ]
      ],
      input_my_cids: [
        '',
        [
        ]
      ]

    })
  }
  getCids(pg= 1, search = '', init = false) {
    this.getSelectsSpecialPersonService
    .getCids(search, pg).then(res => {
      this.currentPageCid = res.current_page + 1;
      this.filteredCids.push(...res.data);
      if (search == ''&& init) {
        this.setCidsInitialValue();

        this.selectElemCids?.openedChange.subscribe((a) => {
          if (!a) {
            this.getCids(1)
          }
          this.registerPanelScrollEvent(this.selectElemCids, EnumControlsForm.myCids)
        });
      }

    });
  }
  setCidsInitialValue() {
    const userData = this.state.getValue()?.userData?.data;
    let cids = [];
    let newFiltered = [];
    userData?.my_cids.forEach(element => {
      // console.log(this.filteredCids.filter(filteredCid => filteredCid.id == element.cid.id))
      if(this.filteredCids.some(filteredCid => filteredCid.id != element.cid.id)) {
        newFiltered.push(element.cid);
      }
      cids.push(element?.cid.id);
    });
    console.log(this.filteredCids);
    let difference = this.filteredCids.filter(x => !newFiltered.includes(x.id));
    newFiltered.push(...difference);
    this.filteredCids = newFiltered;
    this.formGroup.get(EnumControlsForm.myCids)
      .setValue(cids);

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
      if (this.inputElemCids?.nativeElement.value == '') {
        this.getCids(this.currentPageCid);
      }
    }
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
      .get(EnumControlsSpecialPerson.MY_CIDS)
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.selectedCids.emit(res);
      });
  }
  searchCid(value: string) {
    this.getCids(undefined, value);
  }
}
