import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Params } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { GetAddressLatLongService } from 'src/app/core/services/get-address-lat-long/get-address-lat-long.service';
import { LocationService } from 'src/app/core/services/location.service';
import { PlacesAutoCompleteService } from 'src/app/core/services/places-auto-complete/places-auto-complete.service';
import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { ErrorsEnum } from 'src/app/shared/enum/errors/errors.enum';
import { MLocation } from 'src/app/shared/model/location/location.model';
import { ModelGetAddressLatLong } from 'src/app/shared/model/response/google/get-address-lat-long/getAddressLatLong.model';
import { ModelPlacesAutocomplete } from 'src/app/shared/model/response/google/get-places-autocomplete/getPlacesAutocomplete.model';
import { IAppState } from 'src/app/state-management/app.model';
import { AddDataRegister } from 'src/app/state-management/register/register.action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activate-location',
  templateUrl: './activate-location.component.html',
  styleUrls: ['./activate-location.component.scss']
})
export class ActivateLocationComponent implements OnInit {
  dataTexts

  showAddManually = false;
  loadingGetLocation = false;
  enableButton = false;
  errorsEnum = ErrorsEnum;
  formGroup: FormGroup;
  options: ModelPlacesAutocomplete.Prediction[] = [null];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private matDialogRef: MatDialogRef<ActivateLocationComponent>,
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private getAddressLatLongService: GetAddressLatLongService,
    private placesAutoCompleteService: PlacesAutoCompleteService,
  ) {
    matDialogRef.disableClose = true;
   }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.initForm();
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
  closeModal() {
    this.matDialogRef.close(c => {

    });
  }
  activateLocation() {
    this.loadingGetLocation = true;
    this.locationService
      .getCurrentLocation()
      .then(async (response: MLocation) => {
        const params: Params = {
          latlng: `${response.lat}, ${response.lng}`,
          key: environment.googleApis.key
        }
        const address: ModelGetAddressLatLong.IRootObjetct = await this.getAddressLatLongService.getWithOutOptions(false, params).toPromise();
        const dataLocation = {
          ...response,
          address_description: address.results[0].formatted_address
        }
        this.store.dispatch(new AddDataRegister(dataLocation));
        this.loadingGetLocation = false;
        this.closeModal();
      })
      .catch(reject => {
        this.loadingGetLocation = false;
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
  async searchPlace(inputValue: string) {
    const params: Params = {
      input: inputValue,
      key: environment.googleApis.key
    }
    const places = await this.placesAutoCompleteService.getWithOutOptions(false, params).toPromise();
    this.options = places.predictions;
    console.log(places);

  }
  async continueRegister() {
    this.loadingGetLocation = true;
    const params: Params = {
      address: this.formGroup.get('address_description').value,
      key: environment.googleApis.key
    }
    const address: ModelGetAddressLatLong.IRootObjetct = await this.getAddressLatLongService.getWithOutOptions(false, params).toPromise();
    const locationResponse = address.results[0].geometry.location;
    this.store.dispatch(new AddDataRegister({
      lat: locationResponse.lat,
      lng: locationResponse.lng
    }));
    this.loadingGetLocation = false;
    this.matDialogRef.close();
  }
  locationSelected() {
    this.enableButton = true;
  }
}
