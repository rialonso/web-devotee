import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPreferencesComponent } from './filter-preferences.component';
import { FilterPreferencesRoutingModule } from './filter-preferences-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FilterPreferencesComponent,
  ],
  imports: [
    CommonModule,
    FilterPreferencesRoutingModule,
    SharedModule,
  ]
})
export class FilterPreferencesModule { }
