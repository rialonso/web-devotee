import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('src/app/pages/initial-page/initial-page.module').then(m => m.InitialPageModule),
  },
  {
    path: 'rules',
    loadChildren: () => import('src/app/pages/etical-rules/etical-rules.module').then(m => m.EticalRulesModule),
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/continue-register/continue-register.module').then(m => m.ContinueRegisterModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
