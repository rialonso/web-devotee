import { TestBed } from '@angular/core/testing';

import { ChatConnectorService } from './chat-connector.service';

describe('ChatConnectorService', () => {
  let service: ChatConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
