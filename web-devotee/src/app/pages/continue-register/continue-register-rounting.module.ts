import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistredCorrectService } from 'src/app/core/guards/user-registred-correct/user-registred-correct.service';
import { WhoAreYouRegistredCorrectService } from 'src/app/core/guards/who-are-you-registred-correct/who-are-you-registred-correct.service';
import { ChangeUserTypeComponent } from './components/change-user-type/change-user-type.component';
import { RegisterDataComponent } from './components/register-data/register-data.component';
import { ContinueRegisterComponent } from './continue-register.component';

const routes: Routes = [
  {
    path: '',
    component: ContinueRegisterComponent,
    children: [
      {
        path: 'who-are-you',
        component: ChangeUserTypeComponent,
        canActivate: [WhoAreYouRegistredCorrectService]
      },
      {
        path: 'user-data',
        component: RegisterDataComponent,
        canActivate: [UserRegistredCorrectService]

      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinueRegisterRoutingModule { }
