import { TestBed } from '@angular/core/testing';

import { GetChatService } from './get-chat.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetChatService', () => {
  let service: GetChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GetChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
