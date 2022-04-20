import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RememberPasswordComponent } from './remember-password.component';

const routes: Routes = [
  {
    path: '',
    component: RememberPasswordComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RememberPasswordRoutingModule { }
