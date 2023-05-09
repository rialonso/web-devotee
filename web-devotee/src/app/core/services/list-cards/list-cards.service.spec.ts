import { TestBed } from '@angular/core/testing';

import { ListCardsService } from './list-cards.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListCardsService', () => {
  let service: ListCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ListCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
