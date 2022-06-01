import { State, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { IAppState } from 'src/app/state-management/app.model';
import { ImagesTypes } from './enum/images-type.enum';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidatorSpecialCharacteres } from 'src/app/shared/validators/name/name-special-characteres.validator';
import { nameValidatorFormatInvalid } from 'src/app/shared/validators/name/name-format-invalid.validator';
import { ErrorsEnum } from 'src/app/shared/enum/errors/errors.enum';

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent implements OnInit {
  dataTexts;
  imagesURL;
  imagesTypes = ImagesTypes;
  errorsEnum = ErrorsEnum;
  formGroup: FormGroup;
  constructor(
    protected store: Store,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }
  ngOnInit() {
    this.initForm();
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
      console.log(controlPictures.value, files[0]);

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

}
