import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { State } from '@ngrx/store';
import { ReplaySubject, takeUntil } from 'rxjs';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { UserProfileService } from 'src/app/core/services/user-profile/user-profile.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { IAppState } from 'src/app/state-management/app.model';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent {
  dataTexts;
  destroy$ = new ReplaySubject();
  enumRoutes = EnumRoutesApplication;

  constructor(
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<DeleteProfileComponent>,
    private userProfileService: UserProfileService,

  ) {
    this.dataTexts = this.translateService?.textTranslate;

  }
  closeModal() {
    this.matDialogRef.close();
  }
  async deleteAccount() {
    debugger;
    console.log(this.state.getValue().userData.data.id);
    await this.userProfileService.delete(this.state.getValue().userData.data.id, {reason_cancel_account: "cancel"}).toPromise();
    // this.closeModal();
    // localStorage.clear();
    // window.location.href = this.enumRoutes.LOGIN;
  }
}
