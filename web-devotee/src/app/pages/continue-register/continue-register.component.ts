import { Component, OnInit } from '@angular/core';
import { VerifyStageRegisterDataService } from 'src/app/shared/functions/verify-stage-register-data/verify-stage-register-data.service';

@Component({
  selector: 'app-continue-register',
  templateUrl: './continue-register.component.html',
  styleUrls: ['./continue-register.component.scss']
})
export class ContinueRegisterComponent implements OnInit {

  constructor(
    private verifyStageRegisterDataService: VerifyStageRegisterDataService,
  ) { }

  ngOnInit() {

    this.getUserDataVerify();
  }
   getUserDataVerify() {
    this.verifyStageRegisterDataService.redirectRouteWithDataRegistered();
  }
}
