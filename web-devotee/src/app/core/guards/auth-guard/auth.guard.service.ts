import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
/**
 * AuthGuard
 */
@Injectable()
export class AuthGuardService implements CanActivate       {
  /**
   *The constructor
   * @param router AS router
   */
  constructor(
    private router: Router,
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
      const getLocalStorageId = localStorage.getItem('userId');
      const getLocalStorageTOken = localStorage.getItem('access_token');

      if (getLocalStorageId && getLocalStorageTOken){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
}
