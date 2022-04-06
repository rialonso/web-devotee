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
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialPageRoutingModule { }
