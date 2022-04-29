import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@ngrx/store';
import { IAppState } from 'src/app/state-management/app.model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(
    protected state: State<IAppState>,
    private router: Router,

  ){}
  navigateToURL(url: string) {
    this.router.navigate([url]);
  }
  verifyOpenSingIn() {
    return this.state.getValue().controlsApp.openSingIn;
  }
}
