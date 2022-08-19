import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMatchsComponent } from './user-matchs.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserMatchsComponent
  }
]

@NgModule({
  declarations: [
    UserMatchsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class UserMatchsModule { }
