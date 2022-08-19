import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';
import { IRegisterUser } from 'src/app/state-management/register/register.state';
import { EnumRoutesApplication } from '../../enum/routes.enum';
import { RouteService } from '../routes/route.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyStageRegisterDataService {

  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private routeService: RouteService
  ) { }
  verifyDataRegistered() {

  }
  redirectRouteWithDataRegistered() {
    const dataRegister: IRegisterUser  = this.state.getValue().registerData;
    if (!dataRegister.account_type) {
      this.routeService.navigateToURL(EnumRoutesApplication.REGISTER_WHO_ARE_YOU);
    } else if(
      !dataRegister.address_description
      || !dataRegister.birthdate
      || !dataRegister.gender
      || !dataRegister.lat
      || !dataRegister.lng
      || !dataRegister.sexual_orientation
      || !dataRegister.name
    ) {
      this.routeService.navigateToURL(EnumRoutesApplication.REGISTER_USER_DATA);
    } else {
      this.routeService.navigateToURL(EnumRoutesApplication.MATCHS);

    }
  }
}
