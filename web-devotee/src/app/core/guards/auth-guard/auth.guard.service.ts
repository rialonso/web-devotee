import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Injectable()
export class AuthGuardService implements CanActivate       {

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
    ) { }
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
