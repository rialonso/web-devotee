import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { VerifyStageRegisterDataService } from 'src/app/shared/functions/verify-stage-register-data/verify-stage-register-data.service';
import { IAppState } from 'src/app/state-management/app.model';
import { IRegisterUser } from 'src/app/state-management/register/register.state';
/**
 * UserRegistered guard
 */
@Injectable({
  providedIn: 'root'
})
export class UserRegistredCorrectService implements CanActivate {
  /**
   * The constructor
   * @param state State
   * @param router AS route
   * @param verifyStageRegisterDataService as VerifyStageRegistered
   * @param routeService RouterService
   */
  constructor(
    protected state: State<IAppState>,
    private router: Router,
    private verifyStageRegisterDataService: VerifyStageRegisterDataService,
    private routeService: RouteService,

  ) { }
   /**
   * method to validate route
   * @param route AS route
   * @param state As state
   * @returns boolean
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
     this.verifyStageRegisterDataService.getUserData();
     const dataRegister: IRegisterUser  = this.state.getValue().registerData;
     if (!dataRegister.account_type) {
      this.routeService.navigateToURL(EnumRoutesApplication.REGISTER_WHO_ARE_YOU)
      return false;

      } else if(
        !dataRegister.address_description
        || !dataRegister.birthdate
        || !dataRegister.gender
        || !dataRegister.lat
        || !dataRegister.lng
        || !dataRegister.sexual_orientation
        || !dataRegister.name
      ) {
        return true;
      }
      this.router.navigate([EnumRoutesApplication.MATCHS]);
      return false;
    }
  /** Method to verify Route*/
  async verifyRoute() {
    const routeReturned = await this.verifyStageRegisterDataService.redirectRouteWithDataRegistered();

  }
}
