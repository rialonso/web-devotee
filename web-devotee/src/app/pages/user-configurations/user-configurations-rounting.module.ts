import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserConfigurationsComponent } from './user-configurations.component';


const routes: Routes = [
  {
    path: '',
    component: UserConfigurationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserConfigurationsRoutingModule { }
