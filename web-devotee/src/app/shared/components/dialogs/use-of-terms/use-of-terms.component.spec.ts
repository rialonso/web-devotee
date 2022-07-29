import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOfTermsComponent } from './use-of-terms.component';

describe('UseOfTermsComponent', () => {
  let component: UseOfTermsComponent;
  let fixture: ComponentFixture<UseOfTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseOfTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseOfTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
