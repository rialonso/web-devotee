/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StateManagementFuncService } from './state-management-func.service';

describe('Service: StateManagementFunc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateManagementFuncService]
    });
  });

  it('should ...', inject([StateManagementFuncService], (service: StateManagementFuncService) => {
    expect(service).toBeTruthy();
  }));
});
