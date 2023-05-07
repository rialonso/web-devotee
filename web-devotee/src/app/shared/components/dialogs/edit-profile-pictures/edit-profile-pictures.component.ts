import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { State } from '@ngrx/store';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { UpdatePictureByOrderService } from 'src/app/core/services/update-picture-by-order/update-picture-by-order.service';
import { UserProfileService } from 'src/app/core/services/user-profile/user-profile.service';
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
  initialImagesGet: Array<any>;

  loading = false;

  dataTexts;
  constructor(
    protected state: State<IAppState>,
    private matDialogRef: MatDialogRef<EditProfilePicturesComponent>,
    private translateService: TranslateService,
    private updatePictureByOrderService: UpdatePictureByOrderService,
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
    this.dataTexts = this.translateService?.textTranslate;
    this.setArrayOfImages();
  }
  setArrayOfImages() {
    const userProfilePictures = this.state.getValue().userData.data.profile_picture;
    this.initialImagesGet = userProfilePictures;
    if (userProfilePictures.length < 6) {
      let array = Object.assign([], userProfilePictures);
      let index = userProfilePictures.length;
      for (index;  index < 6; index++) {
        array.push({});
      }
      this.images = array;
      return this.images;
    }
    this.images = userProfilePictures;

  }
  selectedImage(files: File, imageIndex: number, order: number) {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (evt) => {
        this.images[imageIndex] = {
          path: evt.target.result,
          localPath: true,
          order,
          file: files[0],
          imageIndex
        }
      };
    }
  }
  async addImages() {
    const formData = new FormData();
    let lastOrder;
    if(this.initialImagesGet.length > 0) {
      lastOrder = this.initialImagesGet[this.initialImagesGet?.length - 1].order;
    } else {
      lastOrder = 0;
    }
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].localPath && this.images[i].order !== undefined) {
        formData.append('image[]', this.images[i].file);
        formData.append('order[]', this.images[i].order);
      } else if(this.images[i].order === undefined) {
        lastOrder++;
        formData.append('image[]', this.images[i].file);
        formData.append('order[]', lastOrder);
      }
    }
    this.loading = true;
    await this.updatePictureByOrderService.post(formData).toPromise();
    this.userProfileService.get(this.state.getValue().userData.data?.id);
    this.loading = false;
    this.closeModal('saved')
  }

  closeModal(msgSend?: string) {
    this.matDialogRef.close(msgSend);
  }

}
