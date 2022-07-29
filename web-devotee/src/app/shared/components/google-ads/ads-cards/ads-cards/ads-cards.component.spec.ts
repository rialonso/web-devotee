import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCardsComponent } from './ads-cards.component';

describe('AdsCardsComponent', () => {
  let component: AdsCardsComponent;
  let fixture: ComponentFixture<AdsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
