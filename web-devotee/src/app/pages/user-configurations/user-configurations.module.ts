import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConfigurationsComponent } from './user-configurations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserConfigurationsRoutingModule } from './user-configurations-rounting.module';



@NgModule({
  declarations: [
    UserConfigurationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserConfigurationsRoutingModule,
  ]
})
export class UserConfigurationsModule { }
