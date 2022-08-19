import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateLocationComponent } from './activate-location.component';

describe('ActivateLocationComponent', () => {
  let component: ActivateLocationComponent;
  let fixture: ComponentFixture<ActivateLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
