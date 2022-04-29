/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DialogsService } from './dialogs.service';

describe('Service: Dialogs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogsService]
    });
  });

  it('should ...', inject([DialogsService], (service: DialogsService) => {
    expect(service).toBeTruthy();
  }));
});
