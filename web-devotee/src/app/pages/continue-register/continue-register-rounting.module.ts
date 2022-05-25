import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDataComponent } from './components/register-data/register-data.component';
import { ContinueRegisterComponent } from './continue-register.component';

const routes: Routes = [
  {
    path: '',
    component: ContinueRegisterComponent,
    children: [
      {
        path: 'dados',
        component: RegisterDataComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinueRegisterRoutingModule { }
