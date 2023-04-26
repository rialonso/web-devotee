import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { State } from '@ngrx/store';
import { GetCidsService } from 'src/app/core/services/get-cids/get-cids.service';
import { GetHosptalsService } from 'src/app/core/services/get-hosptals/get-hosptals.service';
import { GetMedicalProceduresService } from 'src/app/core/services/get-medical-procedures/get-medical-procedures.service';
import { GetMedicinesService } from 'src/app/core/services/get-medicines/get-medicines.service';
import { IAppState } from 'src/app/state-management/app.model';

@Injectable({
  providedIn: 'root'
})
export class GetSelectsSpecialPersonService {

  constructor(
    protected state: State<IAppState>,
    private getCidsService: GetCidsService,
    private getHosptalsService: GetHosptalsService,
    private getMedicalProceduresService: GetMedicalProceduresService,
    private getMedicinesService: GetMedicinesService,
  ) { }
  async getCids(valueSearch: string = '', pg=1) {
    const params: Params = {
      q: valueSearch,
      page: pg
    }
    const responseSelect = await this.getCidsService.get(false, params).toPromise();
    return responseSelect;

  }
  async getMedicalProcedures(valueSearch: string = '', pg =1) {
    const params: Params = {
      q: valueSearch,
      page: pg
    }
    const responseSelect = await this.getMedicalProceduresService.get(false, params).toPromise();
    return responseSelect;

  }
  async getDrugsMedicines(valueSearch: string = '') {
    const params: Params = {
      q: valueSearch
    }
    const responseSelect = await this.getMedicinesService.get(false, params).toPromise();
    return responseSelect;

  }
  async getHosptals(valueSearch: string = '', pg = 1) {
    const registerData = this.state.getValue().registerData;
    const params: Params = {
      lat: registerData.lat,
      lng: registerData.lng,
      page: pg,
      q: valueSearch

    }
    const responseSelect = await this.getHosptalsService.get(false, params).toPromise();
    return responseSelect;
  }
  async getHosptalsLogged(valueSearch: string = '', pg = 1) {
    const registerData = this.state.getValue().userData.data;
    const params: Params = {
      lat: registerData.lat,
      lng: registerData.lng,
      page: pg,
      q: valueSearch

    }
    const responseSelect = await this.getHosptalsService.get(false, params).toPromise();
    return responseSelect;
  }
}
