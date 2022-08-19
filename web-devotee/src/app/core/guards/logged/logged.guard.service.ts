import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class LoggedService implements CanActivate {

  constructor(
    private router: Router,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      const getLocalStorageId = localStorage.getItem('userId');
      const getLocalStorageTOken = localStorage.getItem('access_token');
      if (!getLocalStorageId && !getLocalStorageTOken){
        return true;
      }
      this.router.navigate([EnumRoutesApplication.MATCHS]);
      return false;
    }
}
