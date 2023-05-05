import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectHospitalsComponent } from './multiple-select-hospitals.component';

describe('MultipleSelectHospitalsComponent', () => {
  let component: MultipleSelectHospitalsComponent;
  let fixture: ComponentFixture<MultipleSelectHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSelectHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
