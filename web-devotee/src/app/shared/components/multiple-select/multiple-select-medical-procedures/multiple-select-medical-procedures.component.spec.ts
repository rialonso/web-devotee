import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectMedicalProceduresComponent } from './multiple-select-medical-procedures.component';

describe('MultipleSelectMedicalProceduresComponent', () => {
  let component: MultipleSelectMedicalProceduresComponent;
  let fixture: ComponentFixture<MultipleSelectMedicalProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSelectMedicalProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectMedicalProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
