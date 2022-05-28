import { State, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { ImagesTypes } from './enum/images-type.enum';

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent implements OnInit {
  dataTexts;

  constructor(
    protected store: Store,
    protected state: State<IAppState>,
    private translateService: TranslateService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }

  ngOnInit() {
  }
  selectedImage(files: File, imageType: ImagesTypes) {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {

      }
    }
  }
}
