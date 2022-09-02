import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard/auth.guard.service';
import { LoggedService } from './core/guards/logged/logged.guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('src/app/pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
    canActivate: [LoggedService]
  },
  {
    path: '',
    loadChildren: () => import('src/app/pages/initial-page/initial-page.module').then(m => m.InitialPageModule),
    canActivate: [LoggedService]
  },
  {
    path: 'rules',
    loadChildren: () => import('src/app/pages/etical-rules/etical-rules.module').then(m => m.EticalRulesModule),
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/continue-register/continue-register.module').then(m => m.ContinueRegisterModule),
  },
  {
    path: '',
    loadChildren: () => import('src/app/pages/logged/logged.module').then(m => m.LoggedModule),
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
