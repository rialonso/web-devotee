import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPreferencesComponent } from './filter-preferences.component';
import { FilterPreferencesRoutingModule } from './filter-preferences-rounting.module';



@NgModule({
  declarations: [
    FilterPreferencesComponent,
  ],
  imports: [
    CommonModule,
    FilterPreferencesRoutingModule,
  ]
})
export class FilterPreferencesModule { }
