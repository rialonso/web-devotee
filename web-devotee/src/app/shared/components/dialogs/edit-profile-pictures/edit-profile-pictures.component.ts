import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { State } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { ImagesTypes } from 'src/app/pages/continue-register/components/register-data/enum/images-type.enum';
import { IAppState } from 'src/app/state-management/app.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile-pictures',
  templateUrl: './edit-profile-pictures.component.html',
  styleUrls: ['./edit-profile-pictures.component.scss']
})
export class EditProfilePicturesComponent implements OnInit {
  imagesTypes = ImagesTypes;
  urlImagesS3 = environment.urlImages;
  imagesURL;
  images: Array<any>;

  dataTexts;
  constructor(
    protected state: State<IAppState>,
    private matDialogRef: MatDialogRef<EditProfilePicturesComponent>,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;
    this.setArrayOfImages();
  }
  setArrayOfImages() {
    const userProfilePictures = this.state.getValue().userData.data.profile_picture;
    if (userProfilePictures.length < 6) {
      let array = Object.assign([], userProfilePictures);
      let index = userProfilePictures.length;
      for (index;  index < 6; index++) {
        array.push({});
      }
      this.images = array;
      console.log(this.images);
      return this.images;
    }
    this.images = userProfilePictures;

  }
  selectedImage(files: File, imageIndex: number) {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        console.log(imageIndex);
        this.images[imageIndex] = {
          path: evt.target.result,
          localPath: true,
        }
        // switch (imageType) {
        //   case ImagesTypes.FIRST_IMAGE:
        //     // this.addImagesURL(ImagesTypes.FIRST_IMAGE, evt.target.result);
        //     // this.imagesList[0] = files[0];
        //     break;
        // }
      };
    }
  }
}
