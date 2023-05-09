import { TestBed } from '@angular/core/testing';

import { SendMessageService } from './send-message.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SendMessageService', () => {
  let service: SendMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SendMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
