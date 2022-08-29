import { INITIAL_STATE_REGISTER_USER } from './../../../state-management/register/register.state';
import { AddAllDataUser } from 'src/app/state-management/user-data/user-data.action';
import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { UserProfileService } from 'src/app/core/services/user-profile/user-profile.service';
import { IAppState } from 'src/app/state-management/app.model';
import { IRegisterUser } from 'src/app/state-management/register/register.state';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { EnumRoutesApplication } from '../../enum/routes.enum';
import { RouteService } from '../routes/route.service';
import { StateManagementFuncService } from '../state-management/state-management-func.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyStageRegisterDataService {

  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private routeService: RouteService,
    private userProfileService: UserProfileService,
    private stateManagementFuncServices: StateManagementFuncService
  ) { }
  verifyDataRegistered() {

  }
  async redirectRouteWithDataRegistered() {
    await this.getUserData();
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
      this.stateManagementFuncServices.funcAddDataRegister(INITIAL_STATE_REGISTER_USER);
      this.routeService.navigateToURL(EnumRoutesApplication.MATCHS);
    }
  }
  async getUserData() {
    const userId = parseInt(localStorage.getItem('userId'));
    if(userId) {
      const dataUser: IUserData.RootObject = await this.userProfileService.get(userId).toPromise();
      this.store.dispatch(new AddAllDataUser(dataUser));
      this.stateManagementFuncServices.funcAddDataRegister(dataUser.data);
    }
  }
}
