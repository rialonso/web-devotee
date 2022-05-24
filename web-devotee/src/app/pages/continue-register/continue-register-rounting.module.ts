import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinueRegisterComponent } from './continue-register.component';

const routes: Routes = [
  {path: '',
  component: ContinueRegisterComponent,
  children: [

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinueRegisterRoutingModule { }
