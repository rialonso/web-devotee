import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from './initial-page.component';

const routes: Routes = [
  {path: '',
  component: InitialPageComponent,
  children: [
    {
      path: 'login',
      loadChildren: () => import('src/app/pages/initial-page/components/sign-in/sign-in.module').then(m => m.SignInModule)
    },
    {
      path: 'recuperar',
      loadChildren: () => import('src/app/pages/initial-page/components/remember-password/remember-password.module').then(m => m.RememberPasswordModule)
    },
    {
      path: 'pre-registro',
      loadChildren: () => import('src/app/pages/initial-page/components/register/register.module').then(m => m.RegisterModule)
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialPageRoutingModule { }
