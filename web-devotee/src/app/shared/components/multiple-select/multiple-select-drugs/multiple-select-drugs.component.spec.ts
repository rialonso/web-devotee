import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectDrugsComponent } from './multiple-select-drugs.component';

describe('MultipleSelectDrugsComponent', () => {
  let component: MultipleSelectDrugsComponent;
  let fixture: ComponentFixture<MultipleSelectDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSelectDrugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
