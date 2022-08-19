import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterPreferencesComponent } from './filter-preferences.component';


const routes: Routes = [
  {
    path: '',
    component: FilterPreferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterPreferencesRoutingModule { }
