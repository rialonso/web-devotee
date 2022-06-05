import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { State, Store } from '@ngrx/store';
import { LocationService } from 'src/app/core/services/location.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
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
  constructor(
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<ActivateLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private locationService: LocationService,
    private routeService: RouteService,

  ) {
    matDialogRef.disableClose = true;
   }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
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
      });
  }
  addManually() {

  }
}
