import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { VerifyStageRegisterDataService } from 'src/app/shared/functions/verify-stage-register-data/verify-stage-register-data.service';
import { IAppState } from 'src/app/state-management/app.model';
import { IRegisterUser } from 'src/app/state-management/register/register.state';

@Injectable({
  providedIn: 'root'
})
export class WhoAreYouRegistredCorrectService implements CanActivate {

  constructor(
    protected state: State<IAppState>,
    private router: Router,
    private verifyStageRegisterDataService: VerifyStageRegisterDataService,
    private routeService: RouteService,

  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
     this.verifyStageRegisterDataService.getUserData();
     const dataRegister: IRegisterUser  = this.state.getValue().registerData;

     if (!dataRegister.account_type) {
      return true;

    } else if(
      !dataRegister.address_description
      || !dataRegister.birthdate
      || !dataRegister.gender
      || !dataRegister.lat
      || !dataRegister.lng
      || !dataRegister.sexual_orientation
      || !dataRegister.name
    ) {
      this.routeService.navigateToURL(EnumRoutesApplication.REGISTER_USER_DATA)
    }
      this.router.navigate([EnumRoutesApplication.MATCHS]);
      return false;
    }
  async verifyRoute() {
    const routeReturned = await this.verifyStageRegisterDataService.redirectRouteWithDataRegistered();

  }
}
