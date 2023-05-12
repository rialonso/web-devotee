import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/core/services/user-profile/user-profile.service';
import { VerifyStageRegisterDataService } from 'src/app/shared/functions/verify-stage-register-data/verify-stage-register-data.service';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
/**
 * Continue Register Component
 *
 * @export
 * @class ContinueRegisterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-continue-register',
  templateUrl: './continue-register.component.html',
  styleUrls: ['./continue-register.component.scss']
})
export class ContinueRegisterComponent implements OnInit {
    /**
     * The "constructor"
     *
     * @param {VerifyStageRegisterDataService} verifyStageRegisterDataService A VerifyStageRegisterDataService
     * @param {UserProfileService} userProfileService A UserProfileService

     */
  constructor(
    private verifyStageRegisterDataService: VerifyStageRegisterDataService,
    private userProfileService: UserProfileService,
  ) { }
/**
     * Local onInit
     */
  ngOnInit() {

    this.getUserDataVerify();
  }
   /**
     * Local getUserDataVerify
     */
   getUserDataVerify() {
    this.verifyStageRegisterDataService.redirectRouteWithDataRegistered();
  }
}
