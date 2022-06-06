import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { LocationService } from 'src/app/core/services/location.service';
import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { ErrorsEnum } from 'src/app/shared/enum/errors/errors.enum';
import { MLocation } from 'src/app/shared/model/location/location.model';
import { IAppState } from 'src/app/state-management/app.model';
import { AddDataRegister } from 'src/app/state-management/register/register.action';

@Component({
  selector: 'app-activate-location',
  templateUrl: './activate-location.component.html',
  styleUrls: ['./activate-location.component.scss']
})
export class ActivateLocationComponent implements OnInit {
  dataTexts

  showAddManually = false;
  errorsEnum = ErrorsEnum;
  formGroup: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  filteredStreets: Observable<string[]>;

  constructor(
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<ActivateLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
  ) {
    matDialogRef.disableClose = true;
   }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.initForm();
    this.filteredStreets = this.formGroup.get('address_description')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  initForm() {
    this.formGroup = this.formBuilder.group({
      address_description: [
        '',
        [
          Validators.required,
        ]
      ]
    })

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  closeModal() {
    this.matDialogRef.close(c => {

    });
  }
  activateLocation() {
    this.locationService
      .getCurrentLocation()
      .then((response: MLocation) => {
        this.store.dispatch(new AddDataRegister(response));
      })
      .catch(reject => {
        const snackBarLocationBlocked = this.dataTexts.snacksBars.locationBlocked
        this.snackBarService
          .openSnackbarLocationBlocked(
            snackBarLocationBlocked.mensage,
            snackBarLocationBlocked.button);
        this.addManually();
      });
  }
  addManually() {
    this.showAddManually = true;
  }
  returnModal() {
    this.showAddManually = false;
  }
}
