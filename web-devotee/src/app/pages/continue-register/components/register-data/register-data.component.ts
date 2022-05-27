import { State, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent implements OnInit {
  dataTexts
  constructor(
    protected store: Store,
    protected state: State<IAppState>,
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }

  ngOnInit() {
  }

}
