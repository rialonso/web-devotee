import { CalculateHoursAgoService } from './../../shared/functions/calculate-hours-ago/calculate-hours-ago.service';
import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';
import { LikedMeService } from 'src/app/core/services/liked-me/liked-me.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { UserProfileService } from 'src/app/core/services/user-profile/user-profile.service';
import { DialogsService } from 'src/app/shared/functions/dialogs/dialogs.service';
import { TransformAgeService } from 'src/app/shared/functions/transform-age/transform-age.service';
import { ILikedMe } from 'src/app/shared/model/response/get-liked-me/get-liked-me.model';
import { IAppState } from 'src/app/state-management/app.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liked-me',
  templateUrl: './liked-me.component.html',
  styleUrls: ['./liked-me.component.scss']
})
export class LikedMeComponent implements OnInit {
  dataTexts
  userLikeds: ILikedMe.RootObject;
  loading = false;

  userPlanType: string;
  constructor(
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private likedMeService: LikedMeService,
    private transformAgeService: TransformAgeService,
    private userProfileService: UserProfileService,
    private dialogsService: DialogsService,
    private calculateHoursAgoService: CalculateHoursAgoService,
  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }

  ngOnInit(): void {
    this.userPlanType = this.state.getValue().userData.data.plan_type;
    this.getLikedMe();
  }
  private async getLikedMe() {
    this.loading = true;
    const likedMeData = await this.likedMeService.get().toPromise();
    this.userLikeds = likedMeData.data;
    this.loading = false;
  }
  changeUserImageInBackground(profilePicture): string {
    return `background-image: url(${environment.urlImages}${profilePicture[0]?.path});
    background-color: #D9D9D9;
    background-size: cover;`;
  }
  transformAge(birthDate) {
    if(birthDate) {
      return this.transformAgeService.transformAge(birthDate);
    }
  }
  calculateHoursAgo(updateAt: string) {
    return this.calculateHoursAgoService.calculateHoursAgo(updateAt);
  }
  async openProfile(userId) {
    if (this.userPlanType === 'free') {

    } else {
      const userData = await this.userProfileService.get(userId).toPromise();
      this.dialogsService.openProfile(userData.data);
    }

  }
}
