import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate       {

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      const getLocalStorageId = localStorage.getItem('userId');
      const getLocalStorageTOken = localStorage.getItem('access_token');
      // console.log(getLocalStorageId, getLocalStorageTOken);

      if (getLocalStorageId && getLocalStorageTOken){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
}
