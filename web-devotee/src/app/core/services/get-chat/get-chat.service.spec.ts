import { TestBed } from '@angular/core/testing';

import { GetChatService } from './get-chat.service';

describe('GetChatService', () => {
  let service: GetChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
