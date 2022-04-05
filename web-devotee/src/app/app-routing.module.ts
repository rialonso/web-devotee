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
  // initial page
  // login.
  // create account
  // reset password
  // logged initial page
  // perfil
  // edit profile
  // user page id modal
  // matches
  // chat
  // filtros
  // devotee plus
  // support
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
