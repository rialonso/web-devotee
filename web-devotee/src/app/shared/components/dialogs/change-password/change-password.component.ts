import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ChangePasswordService } from 'src/app/core/services/change-password/change-password.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { ReplaySubject } from 'rxjs';
import { ModelChangePassword } from 'src/app/shared/model/change-password/change-password.model';
import { State } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';
import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  dataTexts;

  hide = true;
  hideNew = true;

  formGroup: FormGroup;

  destroy$ = new ReplaySubject();
  constructor(
    protected state: State<IAppState>,
    private matDialogRef: MatDialogRef<ChangePasswordComponent>,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private changePasswordService: ChangePasswordService,
    private snackBarService: SnackBarService,

  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.initForm();
  }
  closeModal() {
    this.matDialogRef.close();
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      old_password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ]
    })
  }
  async savePassword() {
   const userData = await this.changePasswordService
      .post(this.formGroup.value, this.state.getValue().userData.data.id)
      .pipe(takeUntil(this.destroy$))
      .toPromise();
    if (userData.status) {
      this.closeModal();
      this.snackBarService.openSnackbarSuccess(
        this.dataTexts.snacksBars.successChangePassword.mensage,
        this.dataTexts.snacksBars.successChangePassword.button
      );
    } else {
      this.snackBarService.openSnackbarWarning(
        this.dataTexts.snacksBars.wrongChangePassword.mensage,
        this.dataTexts.snacksBars.wrongChangePassword.button,
        3000
      );
    }
  }
}
