import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedMeComponent } from './liked-me.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LikedMeComponent,
  }
]

@NgModule({
  declarations: [
    LikedMeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})
export class LikedMeModule { }
