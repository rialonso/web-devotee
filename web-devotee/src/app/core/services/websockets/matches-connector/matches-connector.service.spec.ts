import { TestBed } from '@angular/core/testing';

import { MatchesConnectorService } from './matches-connector.service';

describe('MatchesConnectorService', () => {
  let service: MatchesConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
